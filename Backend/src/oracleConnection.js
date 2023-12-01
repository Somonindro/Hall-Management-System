var express = require('express');
const { STRING } = require('oracledb');
var router = express.Router();
var oracledb=require('oracledb');

//connect with db
var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.43.89)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT = 1521)(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD =BASIC))))";

connection = await oracledb.getConnection({
    user:'C##HALL_MANAGEMENT',
    password:'hall_management',
    tns:conString
});

export {connection}