import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import { des_from } from "../Filter/appoint";
import express from 'express'
const finalizeAppointmentRouter = express.Router();

export async function finalizeAppointment(req, res, next) {
    try {
        const {mail}=req.body;
        var query="DECLARE BEGIN APPOINT_PROCEDURE('"+mail_from_signin+"','"+mail+"','"+des_from+"'); END;"; 
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

finalizeAppointmentRouter.post("/",finalizeAppointment)
export default finalizeAppointmentRouter;