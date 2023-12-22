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

  
  
  module.exports = router;