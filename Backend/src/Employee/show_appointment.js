import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const showAppointmentEmRouter = express.Router();

export async function showAppointment(req, res, next) {
    try {
        var query="SELECT * FROM APPOINT WHERE EM_MAILID='"+mail_from_signin+"'";
            
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

showAppointmentEmRouter.get("/",showAppointment)
export default showAppointmentEmRouter;