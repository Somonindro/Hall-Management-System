import { connection } from "../oracleConnection";
import express from 'express'
const authRouter = express.Router();
let mail_from_signin;

export async function auth(req, res, next) {
    try {
        //get the data from req
        const {mail,pass}=req.body;
        mail_from_signin = mail;//storing mail to a global variable

        var query="SELECT PASSWORD FROM PERSON WHERE MAIL_ID = '" + mail + "'";

        connection.execute(query,[],{autoCommit:true},function(e,s){
            if(e){
                res.send(e);
            }
            else{
                res.send(s);
            }
            console.log(s);
            console.log(s.rows.length);
            if (s.rows.length != 0) {
                console.log(s.rows[0]);
                const obj = JSON.stringify(s.rows[0]);
                console.log(obj.substring(2, obj.length - 2));
                if (obj.substring(2, obj.length - 2) == pass) {
                    console.log("Done.");
                    console.log(pass);
                }
                else{
                    console.log("Not done.");
                    console.log(pass);
                }
            }
        })
    } catch (err) {
        next(err)
    }
}


authRouter.get("/",auth)
export {authRouter,mail_from_signin};

