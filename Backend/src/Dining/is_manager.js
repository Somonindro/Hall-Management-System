import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const isManagerRouter = express.Router();

export async function isManager(req, res, next) {
    try {
        var query="SELECT COUNT(*) FROM MESS_MANAGER WHERE MAIL_ID='"+mail_from_signin+"'";

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

isManagerRouter.get("/",isManager)
export default isManagerRouter;