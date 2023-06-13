import react from "react";
import './FirstPage.css';
import {Route, Path, Link} from 'react-router-dom';
import img_stu from './stu_background.jpg';

function FirstPage(){
    const funchi=()=>{ 
        console.log("hii");
    }
    return(
        <div className="FirstPage">
            <div className="Firstpage-header">
                <h1 className="heading" >Hall Management System</h1>
                <p className="header-body">One account. One place to manage it all. Welcome to your account dashboard.</p>
                <div className="button_firstpage">
                <Link to="/login" class="my-button" title="Relevant Title" onClick={funchi} >Sign In</Link>
                <Link to="/signup" class="my-button" title="Relevant Title">Register</Link></div>
                    
            </div>
            <div className="stu-header">
                <h4>Student</h4>
                <p className="stu">Students can find all kind of information of hall resident students and also officials and employees of his hall.
                They can complain their problems to officials of their hall and also can apply for new room or apply for mess manager through this website.
                They can also check their applications have been approved or not. They can find vacant rooms while appling for changing room. 
    
                </p>
                
            </div>
            <div className="off-header">
                <h4>Official</h4>
                <p className="off">This section contains all kinds of information about officials (Provost sir, Assistant provost sir and all other designated teachers). 
                An official can receive all the complains of hall resident students and can assign this to any of employees of his hall through this website.
                Also he will receive applications about room changing or mess manager from students and approve them. He can access all kind of info about residential rooms through this website.

                </p>
                
            </div>

            <div className="em-header">
                <h4>Employee</h4>
                <p className="em">This section will contain all information about employees of the particular hall. When a person will sign in as employee of a hall, he will find all information about
                other employees of that hall. Also he will find the list of job appointment that he has received from officials of his hall. After finishing the particular job, he can change the status of it and student and official will be informed.
    
                </p>
                
            </div>

            <div className="about-header">
                <h4>About</h4>
                <p className="about">CSE-216 Project</p>
                <p className="about">Supervised By: Md. Abdullah Adnan Sir</p>
                <p className="about">Debojit Pandit Dip (1805042)</p>
                <p className="about">Somonindro Roy  (1805049)</p>             
                
                
            </div>
            

        </div>
    )
}

export default FirstPage;