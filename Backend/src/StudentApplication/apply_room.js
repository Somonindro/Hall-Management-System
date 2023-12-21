import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const applyForRoomStuRouter = express.Router();

export async function applyRoom(req, res, next) {
    try {
        const {type,roll,newroom,month} =req.body;
        var query="DECLARE BEGIN APPLICATION_PROCEDURE('"+mail_from_signin+"','"+type+"','"+newroom+"','"+month+"','"+roll+"'); END;";
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

applyForRoomStuRouter.post("/",applyRoom)
export default applyForRoomStuRouter;