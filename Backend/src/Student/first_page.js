import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const firstPageStuRouter = express.Router();

export async function firstPageStu(req, res, next) {
    try {
        var query=`SELECT P.NAME,P.MAIL_ID,S.HALL_NAME,STUDENT_ID,LVL,TERM,BLOOD_GROUP,ROOM_NO,COUPON_NO 
            FROM STUDENT S JOIN PERSON P ON (P.MAIL_ID=S.MAIL_ID) JOIN RESIDENT R ON (S.MAIL_ID=R.MAIL_ID) 
            WHERE S.MAIL_ID='`+mail_from_signin+`'`;
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

firstPageStuRouter.get("/",firstPageStu)
export default firstPageStuRouter;