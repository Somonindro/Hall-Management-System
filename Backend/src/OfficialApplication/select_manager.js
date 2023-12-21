import connection  from "../oracleConnection";
import express from 'express'
const selectManagerOffRouter = express.Router();

// official selects mess manager from the appltions
export async function selectManager(req, res, next) {
    try {
        const {mail,month} =req.body;
        var query="DECLARE BEGIN APPROVE_MANAGER_PROCEDURE('"+mail+"','"+month+"'); END;";
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

selectManagerOffRouter.put("/",selectManager)
export default selectManagerOffRouter;