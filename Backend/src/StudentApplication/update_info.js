import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const updateStuRouter = express.Router();

export async function updateInfo(req, res, next) {
    try {
        const {name,roll,level,term,blood} =req.body;
        var query="DECLARE BEGIN UPDATESTU_PROCEDURE('"+mail_from_signin+"','"+name+"','"+roll+"','"+level+"','"+term+"','"+blood+"'); END;";
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

updateStuRouter.put("/",updateInfo)
export default updateStuRouter;