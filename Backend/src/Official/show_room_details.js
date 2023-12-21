import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import { setroom } from "../Filter/set_room";
import express from 'express'
const showRoomDetailsOffRouter = express.Router();

export async function showRoomDetail(req, res, next) {
    try {
        var query=`SELECT P.NAME,R.MAIL_ID,R.COUPON_NO,S.STUDENT_ID,S.LVL,S.TERM,S.BLOOD_GROUP 
            FROM RESIDENT R JOIN RESIDENTIAL_ROOM RR ON (R.ROOM_NO = RR.ROOM_NO) 
            JOIN PERSON P ON (R.MAIL_ID=P.MAIL_ID) JOIN STUDENT S ON (R.MAIL_ID=S.MAIL_ID) 
            WHERE RR.HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='`+mail_from_signin+`') AND R.ROOM_NO='`+setroom+`'`;
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

showRoomDetailsOffRouter.get("/",showRoomDetail)
export default showRoomDetailsOffRouter;