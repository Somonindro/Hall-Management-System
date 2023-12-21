import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const roomApplicationOffRouter = express.Router();

// official show room appl.
export async function showRoomApplication(req, res, next) {
    try {
        var query=`SELECT A.S_MAILID,STUDENT_ID,NEW_ROOM,STATE,DATE_TIME 
                FROM PERSON P JOIN APPLICATION A ON (P.MAIL_ID = A.S_MAILID) 
                WHERE P.HALL_NAME = (SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='`+mail_from_signin+`') 
                AND A.TYPE = 'room' AND A.STATE='Processing' ORDER BY DATE_TIME`;
            
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

roomApplicationOffRouter.put("/",showRoomApplication)
export default roomApplicationOffRouter;