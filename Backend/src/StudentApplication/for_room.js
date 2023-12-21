import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const roomApplicationStuRouter = express.Router();

export async function roomApplication(req, res, next) {
    try {
        var query=`SELECT STUDENT_ID,NEW_ROOM,STATE,DATE_TIME FROM APPLICATION 
            WHERE S_MAILID='`+mail_from_signin+`' AND TYPE='room' ORDER BY DATE_TIME`;           
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

roomApplicationStuRouter.get("/",roomApplication)
export default roomApplicationStuRouter;