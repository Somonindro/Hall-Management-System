import connection  from "../oracleConnection";
import express from 'express'
const approveRoomOffRouter = express.Router();

// official approving room application
export async function approveRoomApplication(req, res, next) {
    try {
        const {mail,room} =req.body;
        var query="UPDATE APPLICATION SET STATE='Approved' WHERE S_MAILID='"+mail+"' AND NEW_ROOM='"+room+"'"; 
        connection.execute(query,[],{autoCommit:true},function(e,s){
            if(e){
                res.send(e);
            }
            else{
                res.send(s);
            }
        })
        query="UPDATE RESIDENT SET ROOM_NO='"+room+"' WHERE MAIL_ID='"+mail+"'";
        con.execute(query,[],{autoCommit:true})
    } catch (err) {
        next(err)
    }
}

approveRoomOffRouter.put("/",approveRoomApplication)
export default approveRoomOffRouter;