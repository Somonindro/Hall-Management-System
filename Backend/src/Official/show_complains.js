import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const showComplainsOffRouter = express.Router();

export async function showComplains(req, res, next) {
    try {
        var query="SELECT * FROM COMPLAIN WHERE HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"')";           
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

showComplainsOffRouter.get("/",showComplains)
export default showComplainsOffRouter;