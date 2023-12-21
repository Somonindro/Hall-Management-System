let mail_from_signin;
let des_from;
let order_by_what;
let setroom;
let searchbywhat;
let searchwhat;


  //set filter
  router.post('/reg-std-stufirst', function(req, res, next) {

    //get the data from req
    const {orderby}=req.body;
    order_by_what=orderby;
    // console.log(order_by_what+"order by");

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

  
  
  module.exports = router;