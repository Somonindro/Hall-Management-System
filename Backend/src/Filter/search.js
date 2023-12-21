import express from 'express'
const searchRouter = express.Router();
let searchbywhat;
let searchwhat;

export async function search(req, res, next) {
    const {searchby,searchdata}=req.body;
    searchbywhat=searchby;
    searchwhat=searchdata;
}

searchRouter.get("/",search)
export {searchRouter,searchbywhat,searchwhat};