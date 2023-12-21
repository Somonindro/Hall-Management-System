import express from 'express'
const orderByRouter = express.Router();
let order_by_what;

//set filter
export async function orderBy(req, res, next) {
    const {orderby}=req.body;
    order_by_what=orderby;
}

orderByRouter.get("/",orderBy)
export {orderByRouter,order_by_what};