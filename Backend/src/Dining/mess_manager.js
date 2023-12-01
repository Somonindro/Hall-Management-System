import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const diningManagerRouter = express.Router();

export async function manager(req, res, next) {
    try {
        var query= `SELECT P.NAME,M.MAIL_ID,MM.STUDENT_ID,MM.MESS_MONTH,M.CURR_DATE,LUNCH,DINNER
                    FROM MENU M JOIN MESS_MANAGER MM ON (M.MAIL_ID=MM.MAIL_ID)
                    JOIN PERSON P ON (M.MAIL_ID=P.MAIL_ID) 
                    WHERE M.CURR_DATE=TO_CHAR(SYSDATE)
                    AND MM.HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='`+mail_from_signin+`')`;

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

diningManagerRouter.get("/",manager)
export default diningManagerRouter;