import connection  from "../oracleConnection";
import express from 'express'
const doneAppointmentRouter = express.Router();

export async function doneAppointment(req, res, next) {
    try {
        const {des}=req.body;
        var query="DELETE FROM APPOINT WHERE DESCRIPTION='"+des+"'";
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

doneAppointmentRouter.delete("/",doneAppointment)
export default doneAppointmentRouter;