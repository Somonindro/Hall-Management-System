import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const showRoomsOffRouter = express.Router();

export async function showRooms(req, res, next) {
    try {
        var query=`SELECT ROOM_NO,FLOOR,CAPACITY,TOTAL_STUDENT FROM RESIDENTIAL_ROOM 
            WHERE HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='`+mail_from_signin+`')`;
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

showRoomsOffRouter.get("/",showRooms)
export default showRoomsOffRouter;