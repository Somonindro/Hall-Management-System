import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const officialRouter = express.Router();

export async function official(req, res, next) {
    try {
        var query=`SELECT NAME,O.MAIL_ID,POST FROM PERSON P JOIN OFFICIALS O ON (P.MAIL_ID = O.MAIL_ID) 
            WHERE HALL_NAME = (SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='`+mail_from_signin+`')`;
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

officialRouter.get("/",official)
export default officialRouter;