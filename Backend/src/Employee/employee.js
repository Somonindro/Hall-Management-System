import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const employeeRouter = express.Router();

export async function employee(req, res, next) {
    try {
        var query=`SELECT NAME,E.MAIL_ID, DUTY FROM PERSON P JOIN EMPLOYEES E ON (P.MAIL_ID = E.MAIL_ID) 
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

employeeRouter.get("/",employee)
export default employeeRouter;