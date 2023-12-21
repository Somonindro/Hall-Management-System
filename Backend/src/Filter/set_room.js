import express from 'express'
const setRoomRouter = express.Router();
let setroom;

//set filter
export async function setRoom(req, res, next) {
    const {room}=req.body;
    setroom=room;
}

setRoomRouter.get("/",setRoom)
export {setRoomRouter,setroom};