import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const firstPageOffRouter = express.Router();

export async function firstPageOff(req, res, next) {
    try {
        var query="SELECT NAME,P.MAIL_ID,HALL_NAME,POST FROM OFFICIALS O JOIN PERSON P ON (O.MAIL_ID=P.MAIL_ID) WHERE P.MAIL_ID='"+mail_from_signin+"'";
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

firstPageOffRouter.get("/",firstPageOff)
export default firstPageOffRouter;