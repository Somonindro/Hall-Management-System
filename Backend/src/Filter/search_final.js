import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import { searchbywhat,searchwhat } from "./search";
import express from 'express'
const searchFinalRouter = express.Router();

export async function searchFinal(req, res, next) {
    try {
        var query=`SELECT P.NAME,STUDENT_ID,LVL,TERM,BLOOD_GROUP,ROOM_NO,COUPON_NO 
            FROM STUDENT S JOIN RESIDENT R ON (S.MAIL_ID = R.MAIL_ID) JOIN PERSON P ON (R.MAIL_ID = P.MAIL_ID) 
            WHERE S.HALL_NAME = (SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='`+mail_from_signin+`') AND `+searchbywhat+`='`+searchwhat+`'`;
        connection.execute(query,[],{autoCommit:true},function(e,s){
            if(e){
                res.send(e);
            }
            else{
                res.send(s);
            }
            
        })
    } catch (err) {
        next(err)
    }
}

searchFinalRouter.get("/",searchFinal)
export default searchFinalRouter;