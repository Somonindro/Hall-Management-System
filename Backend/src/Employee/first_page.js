import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const firstPageEmRouter = express.Router();

export async function firstPageEM(req, res, next) {
    try {
        var query="SELECT NAME,P.MAIL_ID,HALL_NAME,DUTY,HIRE_DATE,SALARY FROM EMPLOYEES E JOIN PERSON P ON (E.MAIL_ID=P.MAIL_ID) WHERE P.MAIL_ID='"+mail_from_signin+"'";
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

firstPageEmRouter.get("/",firstPageEM)
export default firstPageEmRouter;