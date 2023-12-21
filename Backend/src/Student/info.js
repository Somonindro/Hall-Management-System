import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import { order_by_what } from "../Filter/order_by";
import express from 'express'
const stuInfoRouter = express.Router();

export async function stuInfo(req, res, next) {
    try {
        var query=`SELECT P.NAME,STUDENT_ID,LVL,TERM,BLOOD_GROUP,ROOM_NO,COUPON_NO 
            FROM STUDENT S JOIN RESIDENT R ON (S.MAIL_ID = R.MAIL_ID) JOIN PERSON P ON (R.MAIL_ID = P.MAIL_ID) 
            WHERE S.HALL_NAME = (SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='`+mail_from_signin+`') ORDER BY `+order_by_what;
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

stuInfoRouter.post("/",stuInfo)
export default stuInfoRouter;