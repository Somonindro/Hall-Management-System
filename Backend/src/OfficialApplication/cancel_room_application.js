import connection  from "../oracleConnection";
import express from 'express'
const cancelRoomOffRouter = express.Router();

// official cancelling room application
export async function cancelRoomApplication(req, res, next) {
    try {
        const {mail,room} =req.body;
        var query="UPDATE APPLICATION SET STATE='Failed' WHERE S_MAILID='"+mail+"' AND NEW_ROOM='"+room+"'";
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

cancelRoomOffRouter.put("/",cancelRoomApplication)
export default cancelRoomOffRouter;