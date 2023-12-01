import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const managerApplicationStuRouter = express.Router();

//show his application for being mess manager
export async function managerApplication(req, res, next) {
    try {
        var query="SELECT STUDENT_ID,MESS_MONTH,STATE,DATE_TIME FROM APPLICATION WHERE S_MAILID='"+mail_from_signin+"' AND TYPE='manager' ORDER BY DATE_TIME";
            
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

managerApplicationStuRouter.put("/",managerApplication)
export default managerApplicationStuRouter;