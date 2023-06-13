var express = require('express');
const { STRING } = require('oracledb');
var router = express.Router();
var oracledb=require('oracledb');
let mail_from_signin;
let des_from;
let order_by_what;
let setroom;
let searchbywhat;
let searchwhat;
router.post('/reg-std', function(req, res, next) {

    //get the data from req
    const {mail,pass}=req.body;
    mail_from_signin = mail;//storing mail to a global variable

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT PASSWORD FROM PERSON WHERE MAIL_ID = '" + mail + "'";

            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                console.log(s);
                console.log(s.rows.length);
                if (s.rows.length != 0) {
                    console.log(s.rows[0]);
                    const obj = JSON.stringify(s.rows[0]);
                    console.log(obj.substring(2, obj.length - 2));
                    if (obj.substring(2, obj.length - 2) == pass) {
                        console.log("Done.");
                        console.log(pass);
                    }
                    else{
                        console.log("Not done.");
                        console.log(pass);
                    }
                }
            })
            
        }
    });

  });


  router.post('/reg-std-dininghistory', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT CURR_DATE,LUNCH,DINNER FROM MENU WHERE HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"')";

            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
            })
            
        }
    });

  });


  router.post('/reg-std-studining', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT P.NAME,M.MAIL_ID,MM.STUDENT_ID,MM.MESS_MONTH,M.CURR_DATE,LUNCH,DINNER FROM MENU M JOIN MESS_MANAGER MM ON (M.MAIL_ID=MM.MAIL_ID) JOIN PERSON P ON (M.MAIL_ID=P.MAIL_ID) WHERE M.CURR_DATE=TO_CHAR(SYSDATE) AND MM.HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"')";

            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
            })
            
        }
    });

  });


  router.post('/reg-std-managersection', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT COUNT(*) FROM MESS_MANAGER WHERE MAIL_ID='"+mail_from_signin+"'";

            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
            })
            
        }
    });

  });


  router.post('/reg-std-managersetmenu', function(req, res, next) {

    const {lunch,dinner}=req.body;
    //insert into menu table
    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="DECLARE BEGIN SETMENU_PROCEDURE('"+mail_from_signin+"','"+lunch+"','"+dinner+"'); END;";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
            })
            
        }
    });

  });


  //set filter
  router.post('/reg-std-stufirst', function(req, res, next) {

    //get the data from req
    const {orderby}=req.body;
    order_by_what=orderby;
    console.log(order_by_what+"order by");

  });


  //set room no you want to show
  router.post('/reg-std-setroomno', function(req, res, next) {

    //get the data from req
    const {room}=req.body;
    setroom=room;
    console.log(setroom+"room");

  });

  router.post('/reg-std-offroomdetails', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT P.NAME,R.MAIL_ID,R.COUPON_NO,S.STUDENT_ID,S.LVL,S.TERM,S.BLOOD_GROUP FROM RESIDENT R JOIN RESIDENTIAL_ROOM RR ON (R.ROOM_NO = RR.ROOM_NO) JOIN PERSON P ON (R.MAIL_ID=P.MAIL_ID) JOIN STUDENT S ON (R.MAIL_ID=S.MAIL_ID) WHERE RR.HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"') AND R.ROOM_NO='"+setroom+"'";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });



  router.post('/reg-std-signup', function(req, res, next) {

    //get the data from req
    const {mail,pass,hall,type,name,roll}=req.body;

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{

            var query="INSERT INTO APPROVAL VALUES ('"+mail+"','"+pass+"','"+type+"','"+hall+"','"+roll+"','"+name+"')";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
            })

        }
    });

  });



  router.post('/reg-std-entry', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            //var query="SELECT P.NAME,STUDENT_ID,LVL,TERM,BLOOD_GROUP,ROOM_NO,COUPON_NO FROM STUDENT S JOIN RESIDENT R ON (S.MAIL_ID = R.MAIL_ID) JOIN PERSON P ON (R.MAIL_ID = P.MAIL_ID) WHERE S.HALL_NAME = (SELECT HALL_NAME FROM STUDENT WHERE MAIL_ID='"+mail_from_signin+"') ORDER BY "+order_by_what;
            var query="SELECT P.NAME,STUDENT_ID,LVL,TERM,BLOOD_GROUP,ROOM_NO,COUPON_NO FROM STUDENT S JOIN RESIDENT R ON (S.MAIL_ID = R.MAIL_ID) JOIN PERSON P ON (R.MAIL_ID = P.MAIL_ID) WHERE S.HALL_NAME = (SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"') ORDER BY "+order_by_what;
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });




  router.post('/reg-std-search', function(req, res, next) {

    //get the data from req
    const {searchby,searchdata}=req.body;
    searchbywhat=searchby;
    searchwhat=searchdata;

  });




  router.post('/reg-std-searchfinal', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT P.NAME,STUDENT_ID,LVL,TERM,BLOOD_GROUP,ROOM_NO,COUPON_NO FROM STUDENT S JOIN RESIDENT R ON (S.MAIL_ID = R.MAIL_ID) JOIN PERSON P ON (R.MAIL_ID = P.MAIL_ID) WHERE S.HALL_NAME = (SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"') AND "+searchbywhat+"='"+searchwhat+"'";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });



  router.post('/reg-std-employee', function(req, res, next) {


    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            
            var query="SELECT NAME,E.MAIL_ID, DUTY FROM PERSON P JOIN EMPLOYEES E ON (P.MAIL_ID = E.MAIL_ID) WHERE HALL_NAME = (SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"')";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  router.post('/reg-std-official', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT NAME,O.MAIL_ID,POST FROM PERSON P JOIN OFFICIALS O ON (P.MAIL_ID = O.MAIL_ID) WHERE HALL_NAME = (SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"')";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  //official first page
  router.post('/reg-std-ofirstpage', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT NAME,P.MAIL_ID,HALL_NAME,POST FROM OFFICIALS O JOIN PERSON P ON (O.MAIL_ID=P.MAIL_ID) WHERE P.MAIL_ID='"+mail_from_signin+"'";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });



  //employee first page
  router.post('/reg-std-emfirstpage', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT NAME,P.MAIL_ID,HALL_NAME,DUTY,HIRE_DATE,SALARY FROM EMPLOYEES E JOIN PERSON P ON (E.MAIL_ID=P.MAIL_ID) WHERE P.MAIL_ID='"+mail_from_signin+"'";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });



  //Student first page
  router.post('/reg-std-sfirstpage', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT P.NAME,P.MAIL_ID,S.HALL_NAME,STUDENT_ID,LVL,TERM,BLOOD_GROUP,ROOM_NO,COUPON_NO FROM STUDENT S JOIN PERSON P ON (P.MAIL_ID=S.MAIL_ID) JOIN RESIDENT R ON (S.MAIL_ID=R.MAIL_ID) WHERE S.MAIL_ID='"+mail_from_signin+"'";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  router.post('/reg-std-officialshowroom', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT ROOM_NO,FLOOR,CAPACITY,TOTAL_STUDENT FROM RESIDENTIAL_ROOM WHERE HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"')";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });



  router.post('/reg-std-officialshowvacantroom', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT ROOM_NO,FLOOR,CAPACITY,TOTAL_STUDENT,(CAPACITY-TOTAL_STUDENT) VACANCY FROM RESIDENTIAL_ROOM WHERE HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"') AND TOTAL_STUDENT<CAPACITY";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  router.post('/reg-std-approve', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT * FROM APPROVAL WHERE HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"')";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  router.post('/reg-std-approvenow', function(req, res, next) {

    const {mail,room,coupon,duty,salary}=req.body;
    console.log(mail+" mail");

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="DECLARE BEGIN APPROVAL_PROCEDURE('"+mail+"','"+room+"','"+coupon+"','"+duty+"','"+salary+"'); END;";
            //trigger is called here
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  router.post('/reg-std-stucomplain', function(req, res, next) {

    const {roll,room,des}=req.body;
    // console.log(des);

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            
            var query="DECLARE BEGIN COMPLAIN_PROCEDURE('"+mail_from_signin+"','"+roll+"','"+room+"','"+des+"'); END;";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });



  router.post('/reg-std-showcomplain', function(req, res, next) {


    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT * FROM COMPLAIN WHERE HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"')";
            
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  router.post('/reg-std-appointnow', function(req, res, next) {

    const {des}=req.body;
    // console.log(des+" tuktuk");
    des_from=des;

  });

  router.post('/reg-std-appointfinal', function(req, res, next) {

    //main kaj ekhane
    const {mail}=req.body;

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="DECLARE BEGIN APPOINT_PROCEDURE('"+mail_from_signin+"','"+mail+"','"+des_from+"'); END;";
            
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });

  router.post('/reg-std-getappoint', function(req, res, next) {
    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT * FROM APPOINT WHERE EM_MAILID='"+mail_from_signin+"'";
            
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  router.post('/reg-std-finalgetappoint', function(req, res, next) {


    const {des}=req.body;
    console.log(des);

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="DELETE FROM APPOINT WHERE DESCRIPTION='"+des+"'";
            
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });

  
  router.post('/reg-std-stuapplication', function(req, res, next) {

    const {type,roll,newroom,month} =req.body;
    // console.log(des);

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            //var query="INSERT INTO APPLICATION VALUES ('"+mail_from_signin+"','"+type+"','"+newroom+"','"+month+"','"+roll+"','Processing',SYSDATE)";
            var query="DECLARE BEGIN APPLICATION_PROCEDURE('"+mail_from_signin+"','"+type+"','"+newroom+"','"+month+"','"+roll+"'); END;";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });




  router.post('/reg-std-updatestu', function(req, res, next) {

    const {name,roll,level,term,blood} =req.body;

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="DECLARE BEGIN UPDATESTU_PROCEDURE('"+mail_from_signin+"','"+name+"','"+roll+"','"+level+"','"+term+"','"+blood+"'); END;";
            
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  //show application for mess manager
  router.post('/reg-std-stushowapplication', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT STUDENT_ID,MESS_MONTH,STATE,DATE_TIME FROM APPLICATION WHERE S_MAILID='"+mail_from_signin+"' AND TYPE='manager' ORDER BY DATE_TIME";
            
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  //show application for room
  router.post('/reg-std-stushowroomapplication', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT STUDENT_ID,NEW_ROOM,STATE,DATE_TIME FROM APPLICATION WHERE S_MAILID='"+mail_from_signin+"' AND TYPE='room' ORDER BY DATE_TIME";
            
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  router.post('/reg-std-stushowcomplain', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT DESCRIPTION,STATE FROM COMPLAIN WHERE MAIL_ID='"+mail_from_signin+"'";
            
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  router.post('/reg-std-officialshowapplication', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT A.S_MAILID,STUDENT_ID,MESS_MONTH,STATE,DATE_TIME FROM PERSON P JOIN APPLICATION A ON (P.MAIL_ID = A.S_MAILID) WHERE P.HALL_NAME = (SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"') AND A.TYPE = 'manager' AND A.STATE='Processing' ORDER BY DATE_TIME";
            
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });



  router.post('/reg-std-officialshowroomapp', function(req, res, next) {

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="SELECT A.S_MAILID,STUDENT_ID,NEW_ROOM,STATE,DATE_TIME FROM PERSON P JOIN APPLICATION A ON (P.MAIL_ID = A.S_MAILID) WHERE P.HALL_NAME = (SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"') AND A.TYPE = 'room' AND A.STATE='Processing' ORDER BY DATE_TIME";
            
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });


  router.post('/reg-std-offshowfinalroomappyes', function(req, res, next) {

    const {mail,room} =req.body;

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="UPDATE APPLICATION SET STATE='Approved' WHERE S_MAILID='"+mail+"' AND NEW_ROOM='"+room+"'";
            
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })

            var query1="UPDATE RESIDENT SET ROOM_NO='"+room+"' WHERE MAIL_ID='"+mail+"'";
            con.execute(query1,[],{autoCommit:true})
            
        }
    });

  });

  router.post('/reg-std-offshowfinalroomappno', function(req, res, next) {

    const {mail,room} =req.body;

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="UPDATE APPLICATION SET STATE='Failed' WHERE S_MAILID='"+mail+"' AND NEW_ROOM='"+room+"'";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });






  router.post('/reg-std-offshowfinalmanagerappyes', function(req, res, next) {

    const {mail,month} =req.body;

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="DECLARE BEGIN APPROVE_MANAGER_PROCEDURE('"+mail+"','"+month+"'); END;";
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })

            // var query="UPDATE APPLICATION SET STATE='Approved' WHERE S_MAILID='"+mail+"' AND MESS_MONTH='"+month+"'";
            // var query1="UPDATE APPLICATION SET STATE='Expired' WHERE TYPE='manager' AND S_MAILID<>'"+mail+"' AND HALL_NAME=(SELECT HALL_NAME FROM PERSON WHERE MAIL_ID='"+mail_from_signin+"')";
            // con.execute(query1,[],{autoCommit:true})
            
        }
    });

  });

  router.post('/reg-std-offshowfinalmanagerappno', function(req, res, next) {

    const {mail,month} =req.body;

    //connect with db
    var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

    oracledb.getConnection({
        user:'C##HALL_MANAGEMENT',
        password:'hall_management',
        tns:conString
    },function(err,con){
        if(err)
        {
            res.send('db con error');
        }
        else{
            var query="UPDATE APPLICATION SET STATE='Failed' WHERE S_MAILID='"+mail+"' AND MESS_MONTH='"+month+"'";
            
            con.execute(query,[],{autoCommit:true},function(e,s){
                if(e){
                    res.send(e);
                }
                else{
                    res.send(s);
                }
                
            })
            
        }
    });

  });

  
  
  module.exports = router;