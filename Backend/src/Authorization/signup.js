import { connection } from "../oracleConnection";
import express from 'express'
const signupRouter = express.Router();

export async function signup(req, res, next) {
    try {
        //get the data from req
        const {mail,pass,hall,type,name,roll}=req.body;
        var query="INSERT INTO APPROVAL VALUES ('"+mail+"','"+pass+"','"+type+"','"+hall+"','"+roll+"','"+name+"')";
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


signupRouter.post("/",signup)
export {signupRouter};

