import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const complainStuRouter = express.Router();

export async function complain(req, res, next) {
    try {
        const {roll,room,des}=req.body;
        var query="DECLARE BEGIN COMPLAIN_PROCEDURE('"+mail_from_signin+"','"+roll+"','"+room+"','"+des+"'); END;";
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

complainStuRouter.post("/",complain)
export default complainStuRouter;