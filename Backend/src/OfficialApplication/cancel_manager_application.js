import connection  from "../oracleConnection";
import express from 'express'
const cancelManagerOffRouter = express.Router();

// official cancels rest mess manager application after choosing
export async function cancelManagerApplication(req, res, next) {
    try {
        const {mail,month} =req.body;
        var query="UPDATE APPLICATION SET STATE='Failed' WHERE S_MAILID='"+mail+"' AND MESS_MONTH='"+month+"'";
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

cancelManagerOffRouter.put("/",cancelManagerApplication)
export default cancelManagerOffRouter;