import express from 'express'
const appointRouter = express.Router();
let des_from;

//set filter
export async function appoint(req, res, next) {
    const {des}=req.body;
    des_from=des;
}

appointRouter.get("/",appoint)
export {appointRouter,des_from};