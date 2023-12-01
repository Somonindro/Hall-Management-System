import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const setMenuRouter = express.Router();

export async function setMenu(req, res, next) {
    try {
        const {lunch,dinner}=req.body;
        var query="DECLARE BEGIN SETMENU_PROCEDURE('"+mail_from_signin+"','"+lunch+"','"+dinner+"'); END;";
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

setMenuRouter.put("/",setMenu)
export default setMenuRouter;