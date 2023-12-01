import express from "express";
import { authRouter } from "../src/Authorization/auth";
import signupRouter from "../src/Authorization/signup";
import diningHistoryRouter from "../src/Dining/history";
import diningManagerRouter from "../src/Dining/mess_manager";
import isManagerRouter from "../src/Dining/is_manager";
import setMenuRouter from "../src/Dining/set_menu";
import managerApplicationStuRouter from "../src/StudentApplication/for_mess_manager";
import managerApplicationOffRouter from "../src/OfficialApplication/show_manager_application";

const router = express.Router();

router.use("/reg-std", authRouter);
router.use("/reg-std-signup", signupRouter);
router.use("/reg-std-dininghistory", diningHistoryRouter);
router.use("/reg-std-studining", diningManagerRouter);
router.use("/reg-std-managersection", isManagerRouter);
router.use("/reg-std-managersetmenu", setMenuRouter);
router.use("/reg-std-stushowapplication", managerApplicationStuRouter);
router.use("/reg-std-officialshowapplication", managerApplicationOffRouter);


module.exports = router;
