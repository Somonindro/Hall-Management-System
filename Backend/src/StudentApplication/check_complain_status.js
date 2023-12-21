import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const checkComplainStuRouter = express.Router();

export async function checkComplain(req, res, next) {
    try {
        var query="SELECT DESCRIPTION,STATE FROM COMPLAIN WHERE MAIL_ID='"+mail_from_signin+"'";
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

checkComplainStuRouter.get("/",checkComplain)
export default checkComplainStuRouter;