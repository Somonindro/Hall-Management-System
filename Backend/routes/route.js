import express from "express";
import { authRouter } from "../src/Authorization/auth";
import signupRouter from "../src/Authorization/signup";
import diningHistoryRouter from "../src/Dining/history";
import diningManagerRouter from "../src/Dining/mess_manager";
import isManagerRouter from "../src/Dining/is_manager";
import setMenuRouter from "../src/Dining/set_menu";
import managerApplicationStuRouter from "../src/StudentApplication/for_mess_manager";
import roomApplicationStuRouter from "../src/StudentApplication/for_room";
import updateStuRouter from "../src/StudentApplication/update_info";
import complainStuRouter from "../src/StudentApplication/complain";
import applyForRoomStuRouter from "../src/StudentApplication/apply_room";
import checkComplainStuRouter from "../src/StudentApplication/check_complain_status";

import managerApplicationOffRouter from "../src/OfficialApplication/show_manager_application";
import roomApplicationOffRouter from "../src/OfficialApplication/show_room_application";
import selectManagerOffRouter from "../src/OfficialApplication/select_manager";
import cancelManagerOffRouter from "../src/OfficialApplication/cancel_manager_application";
import approveRoomOffRouter from "../src/OfficialApplication/approve_room_application";
import cancelRoomOffRouter from "../src/OfficialApplication/cancel_room_application";

import showVacantOffRouter from "../src/Official/show_vacant_room";
import showRoomsOffRouter from "../src/Official/show_rooms";

import orderByRouter from "../src/Filter/order_by";
import setRoomRouter from "../src/Filter/set_room";
import searchRouter from "../src/Filter/search";

const router = express.Router();

router.use("/reg-std", authRouter);
router.use("/reg-std-signup", signupRouter);
router.use("/reg-std-dininghistory", diningHistoryRouter);
router.use("/reg-std-studining", diningManagerRouter);
router.use("/reg-std-managersection", isManagerRouter);
router.use("/reg-std-managersetmenu", setMenuRouter);
router.use("/reg-std-stushowapplication", managerApplicationStuRouter);
router.use("/reg-std-stushowroomapplication", roomApplicationStuRouter);
router.use("/reg-std-updatestu", updateStuRouter);
router.use("/reg-std-stucomplain", complainStuRouter);
router.use("/reg-std-stuapplication", applyForRoomStuRouter);
router.use("/reg-std-stushowcomplain", checkComplainStuRouter);

router.use("/reg-std-officialshowapplication", managerApplicationOffRouter);
router.use("/reg-std-officialshowroomapp", roomApplicationOffRouter);
router.use("/reg-std-offshowfinalmanagerappyes", selectManagerOffRouter);
router.use("/reg-std-offshowfinalmanagerappno", cancelManagerOffRouter);
router.use("/reg-std-offshowfinalroomappyes", approveRoomOffRouter);
router.use("/reg-std-offshowfinalroomappno", cancelRoomOffRouter);

router.use("/reg-std-officialshowvacantroom", showVacantOffRouter);
router.use("/reg-std-officialshowroom", showRoomsOffRouter);

router.use("/reg-std-stufirst", orderByRouter);
router.use("/reg-std-setroomno", setRoomRouter);
router.use("/reg-std-search", searchRouter);


module.exports = router;


