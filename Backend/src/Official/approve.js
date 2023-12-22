import connection  from "../oracleConnection";
import express from 'express'
const approvalOffRouter = express.Router();

export async function approval(req, res, next) {
    try {
        const {mail,room,coupon,duty,salary}=req.body;
        var query="DECLARE BEGIN APPROVAL_PROCEDURE('"+mail+"','"+room+"','"+coupon+"','"+duty+"','"+salary+"'); END;";
        //trigger is called here
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

approvalOffRouter.post("/",approval)
export default approvalOffRouter;