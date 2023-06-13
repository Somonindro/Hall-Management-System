import React from "react"
import {Routes, Route} from "react-router-dom";
import App from "./App";
import FirstPage from "./FirstPage";
import SignupPage from "./SignupPage";
import ShowPage from "./ShowPage";
import EmployeePage from "./EmployeePage";
import OfficialPage from "./OfficialPage";
import LoginPage from "./LoginPage";
import ApprovalPage from "./ApprovalPage";
import FinalApprovePage from "./FinalApprovePage";
import OfficialFirstPage from "./OfficialFirstPage";
import StuComplainPage from "./StuComplainPage";
import ShowComplainPage from "./ShowComplainPage";
import ShowComEmployee from "./ShowComEmployee";
import FinalAppointPage from "./FinalAppointPage";
import GetAppointmentPage from "./GetAppointmentPage";
import FinalGetAppoint from "./FinalGetAppoint";
import StuApplicationPage from "./StuApplicationPage";
import StuShowApplication from "./StuShowApplication";
import StuShowComplain from "./StuShowComplain";
import OfficialShowApplication from "./OfficialShowApplication";
import OfficialShowRoomApp from "./OfficialShowRoomApp";
import StuFirstPage from "./StuFirstPage";
import OfficialShowRoom from "./OfficialShowRoom";
import OffRoomDetails from "./OffRoomDetails";
import OfficialShowVacantRoom from "./OfficialShowVacantRoom";
import StuShowRoomApplication from "./StuShowRoomApplication";
import EmFirstPage from "./EmFirstPage";
import UpdateStu from "./UpdateStu";
import OffShowFinalRoomApp from "./OffShowFinalRoomApp";
import OffShowFinalManagerApp from "./OffShowFinalManagerApp";
import ManagerSection from "./ManagerSection";
import StuDining from "./StuDining";
import DiningHistory from "./DiningHistory";
import SearchFinal from "./SearchFinal";


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