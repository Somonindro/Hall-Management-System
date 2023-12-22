import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const showApprovalOffRouter = express.Router();

export async function showApproval(req, res, next) {
    try {
        var query="SELECT * FROM APPROVAL WHERE HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"')";
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

showApprovalOffRouter.get("/",showApproval)
export default showApprovalOffRouter;