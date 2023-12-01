import connection  from "../oracleConnection";
import { mail_from_signin } from "../Authorization/auth";
import express from 'express'
const diningHistoryRouter = express.Router();

export async function history(req, res, next) {
    try {
        var query="SELECT CURR_DATE,LUNCH,DINNER FROM MENU WHERE HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"')";

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

diningHistoryRouter.get("/",history)
export default diningHistoryRouter;