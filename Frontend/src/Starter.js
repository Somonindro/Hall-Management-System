import React from "react"
import {Routes, Route} from "react-router-dom";
import App from "./App";
import FirstPage from "./FirstPage";
import SignupPage from "./Authorization/SignupPage";
import ShowPage from "./Student/ShowPage";
import EmployeePage from "./Employee/EmployeePage";
import OfficialPage from "./Official/OfficialPage";
import LoginPage from "./Authorization/LoginPage";
import ApprovalPage from "./Official/ApprovalPage";
import FinalApprovePage from "./Official/FinalApprovePage";
import OfficialFirstPage from "./Official/OfficialFirstPage";
import StuComplainPage from "./StudentApplication/StuComplainPage";
import ShowComplainPage from "./Official/ShowComplainPage";
import ShowComEmployee from "./Filter/ShowComEmployee";
import FinalAppointPage from "./Official/FinalAppointPage";
import GetAppointmentPage from "./Employee/GetAppointmentPage";
import FinalGetAppoint from "./Official/FinalGetAppoint";
import StuApplicationPage from "./StudentApplication/StuApplicationPage";
import StuShowApplication from "./StudentApplication/StuShowApplication";
import StuShowComplain from "./StudentApplication/StuShowComplain";
import OfficialShowApplication from "./Official/OfficialShowApplication";
import OfficialShowRoomApp from "./Official/OfficialShowRoomApp";
import StuFirstPage from "./Student/StuFirstPage";
import OfficialShowRoom from "./Official/OfficialShowRoom";
import OffRoomDetails from "./Official/OffRoomDetails";
import OfficialShowVacantRoom from "./Official/OfficialShowVacantRoom";
import StuShowRoomApplication from "./StudentApplication/StuShowRoomApplication";
import EmFirstPage from "./Employee/EmFirstPage";
import UpdateStu from "./StudentApplication/UpdateStu";
import OffShowFinalRoomApp from "./OfficialApplication/OffShowFinalRoomApp";
import OffShowFinalManagerApp from "./OfficialApplication/OffShowFinalManagerApp";
import ManagerSection from "./Dining/ManagerSection";
import StuDining from "./Dining/StuDining";
import DiningHistory from "./Dining/DiningHistory";
import SearchFinal from "./Filter/SearchFinal";


function Starter(){
    return(
        <div>
            <Routes>
                <Route path = "/" element ={<FirstPage/>}/>
                <Route path = "/signup" element ={<SignupPage/>}/>
                <Route path = "/show" element ={<ShowPage/>}/>
                <Route path = "/employee" element ={<EmployeePage/>}/>
                <Route path = "/official" element ={<OfficialPage/>}/>
                <Route path = "/login" element ={<LoginPage/>}/>
                <Route path = "/approval" element ={<ApprovalPage/>}/>
                <Route path = "/finalapproval" element ={<FinalApprovePage/>}/>
                <Route path = "/officialfirst" element ={<OfficialFirstPage/>}/>
                <Route path = "/stucomplain" element ={<StuComplainPage/>}/>
                <Route path = "/showcomplain" element ={<ShowComplainPage/>}/>
                <Route path = "/showcomemployee" element ={<ShowComEmployee/>}/>
                <Route path = "/finalappoint" element ={<FinalAppointPage/>}/>
                <Route path = "/getappoint" element ={<GetAppointmentPage/>}/>
                <Route path = "/finalgetappoint" element ={<FinalGetAppoint/>}/>
                <Route path = "/stuapplication" element ={<StuApplicationPage/>}/>
                <Route path = "/stushowapplication" element ={<StuShowApplication/>}/>
                <Route path = "/stushowcomplain" element ={<StuShowComplain/>}/>
                <Route path = "/officialshowapplication" element ={<OfficialShowApplication/>}/>
                <Route path = "/officialshowroomapp" element ={<OfficialShowRoomApp/>}/>
                <Route path = "/stufirst" element ={<StuFirstPage/>}/>
                <Route path = "/officialshowroom" element ={<OfficialShowRoom/>}/>
                <Route path = "/offroomdetails" element ={<OffRoomDetails/>}/>
                <Route path = "/officialshowvacantroom" element ={<OfficialShowVacantRoom/>}/>
                <Route path = "/stushowroomapplication" element ={<StuShowRoomApplication/>}/>
                <Route path = "/emfirstpage" element ={<EmFirstPage/>}/>
                <Route path = "/updatestu" element ={<UpdateStu/>}/>
                <Route path = "/offshowfinalroomapp" element ={<OffShowFinalRoomApp/>}/>
                <Route path = "/offshowfinalmanagerapp" element ={<OffShowFinalManagerApp/>}/>
                <Route path = "/managersection" element ={<ManagerSection/>}/>
                <Route path = "/studining" element ={<StuDining/>}/>
                <Route path = "/dininghistory" element ={<DiningHistory/>}/>
                <Route path = "/searchfinal" element ={<SearchFinal/>}/>
            </Routes>
        </div>
    );
}

export default Starter;