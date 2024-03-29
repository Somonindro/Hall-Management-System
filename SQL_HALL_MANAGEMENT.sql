/*
 Navicat Premium Data Transfer

 Source Server         : Oracle
 Source Server Type    : Oracle
 Source Server Version : 190000
 Source Host           : localhost:1521
 Source Schema         : C##HALL_MANAGEMENT

 Target Server Type    : Oracle
 Target Server Version : 190000
 File Encoding         : 65001

 Date: 21/02/2022 21:57:53
*/


-- ----------------------------
-- Table structure for ALLOTED
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."ALLOTED";
CREATE TABLE "C##HALL_MANAGEMENT"."ALLOTED" (
  "RESIDENT_ROOMNO" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "RESIDENT_MAILID" VARCHAR2(255 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for ALLOTMENT
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."ALLOTMENT";
CREATE TABLE "C##HALL_MANAGEMENT"."ALLOTMENT" (
  "S_MAIL_ID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "O_MAIL_ID" VARCHAR2(50 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for APPLICATION
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."APPLICATION";
CREATE TABLE "C##HALL_MANAGEMENT"."APPLICATION" (
  "S_MAILID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "TYPE" VARCHAR2(255 BYTE) VISIBLE,
  "NEW_ROOM" VARCHAR2(255 BYTE) VISIBLE,
  "MESS_MONTH" VARCHAR2(255 BYTE) VISIBLE,
  "STUDENT_ID" VARCHAR2(255 BYTE) VISIBLE,
  "STATE" VARCHAR2(255 BYTE) VISIBLE,
  "DATE_TIME" DATE VISIBLE,
  "HALL_NAME" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for APPOINT
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."APPOINT";
CREATE TABLE "C##HALL_MANAGEMENT"."APPOINT" (
  "O_MAILID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "EM_MAILID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "DESCRIPTION" VARCHAR2(255 BYTE) VISIBLE,
  "S_MAILID" VARCHAR2(255 BYTE) VISIBLE,
  "ROOM_NO" VARCHAR2(255 BYTE) VISIBLE,
  "HALL_NAME" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for APPROVAL
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."APPROVAL";
CREATE TABLE "C##HALL_MANAGEMENT"."APPROVAL" (
  "MAIL_ID" VARCHAR2(255 BYTE) VISIBLE,
  "PASSWORD" VARCHAR2(255 BYTE) VISIBLE,
  "TYPE" VARCHAR2(255 BYTE) VISIBLE,
  "HALL_NAME" VARCHAR2(255 BYTE) VISIBLE,
  "STUDENT_ID" VARCHAR2(255 BYTE) VISIBLE,
  "NAME" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for ATTACHED
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."ATTACHED";
CREATE TABLE "C##HALL_MANAGEMENT"."ATTACHED" (
  "MAIL_ID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "PRESENT_ADDRESS" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for COMPLAIN
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."COMPLAIN";
CREATE TABLE "C##HALL_MANAGEMENT"."COMPLAIN" (
  "MAIL_ID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "STUDENT_ID" VARCHAR2(255 BYTE) VISIBLE,
  "ROOM_NO" VARCHAR2(255 BYTE) VISIBLE,
  "DESCRIPTION" VARCHAR2(255 BYTE) VISIBLE,
  "STATE" VARCHAR2(255 BYTE) VISIBLE,
  "HALL_NAME" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for EMPLOYEES
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."EMPLOYEES";
CREATE TABLE "C##HALL_MANAGEMENT"."EMPLOYEES" (
  "MAIL_ID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "DUTY" VARCHAR2(255 BYTE) VISIBLE,
  "HIRE_DATE" DATE VISIBLE,
  "SALARY" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for HALL
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."HALL";
CREATE TABLE "C##HALL_MANAGEMENT"."HALL" (
  "NAME" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "ADDRESS" VARCHAR2(50 BYTE) VISIBLE,
  "SPACE" VARCHAR2(50 BYTE) VISIBLE,
  "NO_OF_ROOMS" NUMBER(10,0) VISIBLE NOT NULL,
  "NO_OF_FLOORS" NUMBER(10,0) VISIBLE NOT NULL,
  "STUDENT_CAPACITY" NUMBER(10,0) VISIBLE NOT NULL,
  "TOTAL_STUDENTS" NUMBER(8,0) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for MENU
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."MENU";
CREATE TABLE "C##HALL_MANAGEMENT"."MENU" (
  "HALL_NAME" VARCHAR2(255 BYTE) VISIBLE,
  "CURR_DATE" VARCHAR2(255 BYTE) VISIBLE,
  "LUNCH" VARCHAR2(255 BYTE) VISIBLE,
  "MAIL_ID" VARCHAR2(255 BYTE) VISIBLE,
  "DINNER" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for MESS_MANAGER
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."MESS_MANAGER";
CREATE TABLE "C##HALL_MANAGEMENT"."MESS_MANAGER" (
  "MAIL_ID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "MESS_MONTH" VARCHAR2(255 BYTE) VISIBLE,
  "HALL_NAME" VARCHAR2(255 BYTE) VISIBLE,
  "STUDENT_ID" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for OFFICIALS
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."OFFICIALS";
CREATE TABLE "C##HALL_MANAGEMENT"."OFFICIALS" (
  "MAIL_ID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "POST" VARCHAR2(50 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for PERSON
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."PERSON";
CREATE TABLE "C##HALL_MANAGEMENT"."PERSON" (
  "MAIL_ID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "TYPE" VARCHAR2(50 BYTE) VISIBLE,
  "NAME" VARCHAR2(50 BYTE) VISIBLE,
  "HALL_NAME" VARCHAR2(255 BYTE) VISIBLE,
  "PASSWORD" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for RESIDENT
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."RESIDENT";
CREATE TABLE "C##HALL_MANAGEMENT"."RESIDENT" (
  "MAIL_ID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "ROOM_NO" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "COUPON_NO" VARCHAR2(255 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for RESIDENTIAL_ROOM
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."RESIDENTIAL_ROOM";
CREATE TABLE "C##HALL_MANAGEMENT"."RESIDENTIAL_ROOM" (
  "ROOM_NO" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "FLOOR" VARCHAR2(255 BYTE) VISIBLE,
  "CAPACITY" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "TOTAL_STUDENT" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "HALL_NAME" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Table structure for STUDENT
-- ----------------------------
DROP TABLE "C##HALL_MANAGEMENT"."STUDENT";
CREATE TABLE "C##HALL_MANAGEMENT"."STUDENT" (
  "MAIL_ID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "HALL_NAME" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "STUDENT_ID" VARCHAR2(255 BYTE) VISIBLE,
  "LVL" VARCHAR2(255 BYTE) VISIBLE,
  "TERM" VARCHAR2(255 BYTE) VISIBLE,
  "BLOOD_GROUP" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Function structure for APPLICATION_PROCEDURE
-- ----------------------------
CREATE OR REPLACE
PROCEDURE "C##HALL_MANAGEMENT"."APPLICATION_PROCEDURE" AS
BEGIN
SELECT HALL_NAME INTO HALL
FROM PERSON
WHERE MAIL_ID = MAIL ;

INSERT INTO APPLICATION VALUES (MAIL,TYP,ROOM,MONTH,ROLL,'Processing',SYSDATE,HALL);


END ;
/

-- ----------------------------
-- Function structure for APPOINT_PROCEDURE
-- ----------------------------
CREATE OR REPLACE
PROCEDURE "C##HALL_MANAGEMENT"."APPOINT_PROCEDURE" AS
BEGIN
SELECT MAIL_ID,ROOM_NO,HALL_NAME INTO SID,ROOM,HALL
FROM COMPLAIN
WHERE DESCRIPTION = DES ;

INSERT INTO APPOINT VALUES (OID,EID,DES,SID,ROOM,HALL);


END ;
/

-- ----------------------------
-- Function structure for APPROVAL_PROCEDURE
-- ----------------------------
CREATE OR REPLACE
PROCEDURE "C##HALL_MANAGEMENT"."APPROVAL_PROCEDURE" AS
BEGIN
SELECT TYPE INTO TYP FROM APPROVAL WHERE MAIL_ID=MID;
DELETE FROM APPROVAL WHERE MAIL_ID=MID;

IF TYP = 'Student' THEN
 	INSERT INTO RESIDENT VALUES (MID,ROOM,COUPON);
 
ELSE
 	UPDATE EMPLOYEES SET DUTY=E_DUTY,HIRE_DATE=SYSDATE,SALARY=E_SALARY WHERE MAIL_ID = MID;
	
 END IF;

END ;
/

-- ----------------------------
-- Function structure for APPROVE_MANAGER_PROCEDURE
-- ----------------------------
CREATE OR REPLACE
PROCEDURE "C##HALL_MANAGEMENT"."APPROVE_MANAGER_PROCEDURE" AS
BEGIN
SELECT HALL_NAME INTO HALL
FROM PERSON
WHERE MAIL_ID = MAIL ;

SELECT STUDENT_ID INTO ROLL
FROM STUDENT
WHERE MAIL_ID = MAIL ;

UPDATE APPLICATION SET STATE='Approved' WHERE S_MAILID=MAIL AND MESS_MONTH=MONTH;
UPDATE APPLICATION SET STATE='Expired' WHERE TYPE='manager' AND S_MAILID<> MAIL AND HALL_NAME=HALL;
DELETE FROM MESS_MANAGER WHERE HALL_NAME=HALL;
INSERT INTO MESS_MANAGER VALUES(MAIL,MONTH,HALL,ROLL);


END ;
/

-- ----------------------------
-- Function structure for COMPLAIN_PROCEDURE
-- ----------------------------
CREATE OR REPLACE
PROCEDURE "C##HALL_MANAGEMENT"."COMPLAIN_PROCEDURE" AS
BEGIN
SELECT HALL_NAME INTO HALL
FROM PERSON
WHERE MAIL_ID = SID ;

INSERT INTO COMPLAIN VALUES (SID,ROLL,ROOM,DES,'not done',HALL);


END ;
/

-- ----------------------------
-- Function structure for SETMENU_PROCEDURE
-- ----------------------------
CREATE OR REPLACE
PROCEDURE "C##HALL_MANAGEMENT"."SETMENU_PROCEDURE" AS
BEGIN
SELECT HALL_NAME INTO HALL
FROM PERSON
WHERE MAIL_ID = MAIL ;

INSERT INTO MENU VALUES(HALL,SYSDATE,SETLUNCH,MAIL,SETDINNER);


END ;
/

-- ----------------------------
-- Function structure for UPDATESTU_PROCEDURE
-- ----------------------------
CREATE OR REPLACE
PROCEDURE "C##HALL_MANAGEMENT"."UPDATESTU_PROCEDURE" AS
BEGIN

IF NEW_NAME <> 'undefined' THEN
 	UPDATE PERSON SET NAME=NEW_NAME WHERE MAIL_ID=MID;
	END IF;

IF NEW_ROLL <> 'undefined' THEN
 	UPDATE STUDENT SET STUDENT_ID=NEW_ROLL WHERE MAIL_ID=MID;
	END IF;

IF NEW_LEVEL <> 'undefined' THEN
 	UPDATE STUDENT SET LVL=NEW_LEVEL WHERE MAIL_ID=MID;
	END IF;

IF NEW_TERM <> 'undefined' THEN
 	UPDATE STUDENT SET TERM=NEW_TERM WHERE MAIL_ID=MID;
	END IF;

IF NEW_BLOOD <> 'undefined' THEN
 	UPDATE STUDENT SET BLOOD_GROUP=NEW_BLOOD WHERE MAIL_ID=MID;
	END IF;

END ;
/

-- ----------------------------
-- Checks structure for table ALLOTED
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."ALLOTED" ADD CONSTRAINT "SYS_C007785" CHECK ("RESIDENT_ROOMNO" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."ALLOTED" ADD CONSTRAINT "SYS_C007786" CHECK ("RESIDENT_MAILID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table ALLOTMENT
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."ALLOTMENT" ADD CONSTRAINT "SYS_C007746" PRIMARY KEY ("S_MAIL_ID", "O_MAIL_ID");

-- ----------------------------
-- Checks structure for table ALLOTMENT
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."ALLOTMENT" ADD CONSTRAINT "SYS_C007744" CHECK ("S_MAIL_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."ALLOTMENT" ADD CONSTRAINT "SYS_C007745" CHECK ("O_MAIL_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Checks structure for table APPLICATION
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."APPLICATION" ADD CONSTRAINT "SYS_C007747" CHECK ("S_MAILID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Checks structure for table APPOINT
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."APPOINT" ADD CONSTRAINT "SYS_C007754" CHECK ("O_MAILID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."APPOINT" ADD CONSTRAINT "SYS_C007755" CHECK ("EM_MAILID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Triggers structure for table APPOINT
-- ----------------------------
CREATE TRIGGER "C##HALL_MANAGEMENT"."DELETE_APPOINT" BEFORE DELETE ON "C##HALL_MANAGEMENT"."APPOINT" REFERENCING OLD AS "OLD" NEW AS "NEW" FOR EACH ROW 
DECLARE
OLD_MAILID VARCHAR2(255);
O_DESCRIPTION VARCHAR2(255);

BEGIN
OLD_MAILID := :OLD.S_MAILID;
O_DESCRIPTION := :OLD.DESCRIPTION;

UPDATE COMPLAIN
SET STATE = 'done'
WHERE MAIL_ID = OLD_MAILID AND DESCRIPTION = O_DESCRIPTION;



END;
/

-- ----------------------------
-- Triggers structure for table APPROVAL
-- ----------------------------
CREATE TRIGGER "C##HALL_MANAGEMENT"."DELETE_APPROVAL" BEFORE DELETE ON "C##HALL_MANAGEMENT"."APPROVAL" REFERENCING OLD AS "OLD" NEW AS "NEW" FOR EACH ROW 
DECLARE
O_MAIL VARCHAR2(255);
O_PASS VARCHAR2(255);
O_TYPE VARCHAR2(255);
O_HALL VARCHAR2(255);
O_ID VARCHAR2(255);
O_NAME VARCHAR2(255);
BEGIN
O_MAIL := :OLD.MAIL_ID;
O_TYPE := :OLD.TYPE;
O_NAME := :OLD.NAME;
O_HALL := :OLD.HALL_NAME;
O_PASS := :OLD.PASSWORD;
O_ID := :OLD.STUDENT_ID;
INSERT INTO PERSON VALUES(O_MAIL, O_TYPE, O_NAME, O_HALL, O_PASS);

IF O_TYPE = 'Student' THEN
 	INSERT INTO STUDENT VALUES(O_MAIL, O_HALL, O_ID, NULL, null, NULL);
-- 	DBMS_OUTPUT.PUT_LINE(O_TYPE);
-- ELSE IF O_TYPE = 'Employee' THEN
-- 	INSERT INTO EMPLOYEES VALUE(O_MAIL, null, null, null, null);


ELSE
	INSERT INTO EMPLOYEES VALUES(O_MAIL, null, null, null);
END IF;


END;
/

-- ----------------------------
-- Primary Key structure for table ATTACHED
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."ATTACHED" ADD CONSTRAINT "SYS_C007773" PRIMARY KEY ("MAIL_ID");

-- ----------------------------
-- Checks structure for table ATTACHED
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."ATTACHED" ADD CONSTRAINT "SYS_C007772" CHECK ("MAIL_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Checks structure for table COMPLAIN
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."COMPLAIN" ADD CONSTRAINT "SYS_C007935" CHECK ("MAIL_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table EMPLOYEES
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."EMPLOYEES" ADD CONSTRAINT "SYS_C007753" PRIMARY KEY ("MAIL_ID");

-- ----------------------------
-- Checks structure for table EMPLOYEES
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."EMPLOYEES" ADD CONSTRAINT "SYS_C007750" CHECK ("MAIL_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table HALL
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."HALL" ADD CONSTRAINT "SYS_C007732" PRIMARY KEY ("NAME");

-- ----------------------------
-- Checks structure for table HALL
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."HALL" ADD CONSTRAINT "SYS_C007727" CHECK ("NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."HALL" ADD CONSTRAINT "SYS_C007728" CHECK ("NO_OF_ROOMS" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."HALL" ADD CONSTRAINT "SYS_C007729" CHECK ("NO_OF_FLOORS" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."HALL" ADD CONSTRAINT "SYS_C007730" CHECK ("STUDENT_CAPACITY" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."HALL" ADD CONSTRAINT "SYS_C007731" CHECK ("TOTAL_STUDENTS" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table MESS_MANAGER
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."MESS_MANAGER" ADD CONSTRAINT "SYS_C007764" PRIMARY KEY ("MAIL_ID");

-- ----------------------------
-- Checks structure for table MESS_MANAGER
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."MESS_MANAGER" ADD CONSTRAINT "SYS_C007763" CHECK ("MAIL_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table OFFICIALS
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."OFFICIALS" ADD CONSTRAINT "SYS_C007743" PRIMARY KEY ("MAIL_ID");

-- ----------------------------
-- Checks structure for table OFFICIALS
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."OFFICIALS" ADD CONSTRAINT "SYS_C007742" CHECK ("MAIL_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table PERSON
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."PERSON" ADD CONSTRAINT "SYS_C007741" PRIMARY KEY ("MAIL_ID");

-- ----------------------------
-- Checks structure for table PERSON
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."PERSON" ADD CONSTRAINT "SYS_C007739" CHECK ("MAIL_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table RESIDENT
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."RESIDENT" ADD CONSTRAINT "SYS_C007771" PRIMARY KEY ("MAIL_ID");

-- ----------------------------
-- Checks structure for table RESIDENT
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."RESIDENT" ADD CONSTRAINT "SYS_C007768" CHECK ("MAIL_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."RESIDENT" ADD CONSTRAINT "SYS_C007769" CHECK ("ROOM_NO" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."RESIDENT" ADD CONSTRAINT "SYS_C007770" CHECK ("COUPON_NO" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table RESIDENTIAL_ROOM
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."RESIDENTIAL_ROOM" ADD CONSTRAINT "SYS_C007791" PRIMARY KEY ("ROOM_NO");

-- ----------------------------
-- Checks structure for table RESIDENTIAL_ROOM
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."RESIDENTIAL_ROOM" ADD CONSTRAINT "SYS_C007788" CHECK ("ROOM_NO" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."RESIDENTIAL_ROOM" ADD CONSTRAINT "SYS_C007789" CHECK ("CAPACITY" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."RESIDENTIAL_ROOM" ADD CONSTRAINT "SYS_C007790" CHECK ("TOTAL_STUDENT" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table STUDENT
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."STUDENT" ADD CONSTRAINT "SYS_C007737" PRIMARY KEY ("MAIL_ID");

-- ----------------------------
-- Checks structure for table STUDENT
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."STUDENT" ADD CONSTRAINT "SYS_C007733" CHECK ("MAIL_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."STUDENT" ADD CONSTRAINT "SYS_C007734" CHECK ("HALL_NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table ALLOTED
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."ALLOTED" ADD CONSTRAINT "SYS_C007802" FOREIGN KEY ("RESIDENT_MAILID") REFERENCES "C##HALL_MANAGEMENT"."RESIDENT" ("MAIL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table ALLOTMENT
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."ALLOTMENT" ADD CONSTRAINT "SYS_C007873" FOREIGN KEY ("S_MAIL_ID") REFERENCES "C##HALL_MANAGEMENT"."STUDENT" ("MAIL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##HALL_MANAGEMENT"."ALLOTMENT" ADD CONSTRAINT "SYS_C007874" FOREIGN KEY ("O_MAIL_ID") REFERENCES "C##HALL_MANAGEMENT"."OFFICIALS" ("MAIL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table APPOINT
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."APPOINT" ADD CONSTRAINT "SYS_C007877" FOREIGN KEY ("O_MAILID") REFERENCES "C##HALL_MANAGEMENT"."OFFICIALS" ("MAIL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table ATTACHED
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."ATTACHED" ADD CONSTRAINT "SYS_C007889" FOREIGN KEY ("MAIL_ID") REFERENCES "C##HALL_MANAGEMENT"."STUDENT" ("MAIL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table EMPLOYEES
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."EMPLOYEES" ADD CONSTRAINT "SYS_C007887" FOREIGN KEY ("MAIL_ID") REFERENCES "C##HALL_MANAGEMENT"."PERSON" ("MAIL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table MESS_MANAGER
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."MESS_MANAGER" ADD CONSTRAINT "SYS_C007890" FOREIGN KEY ("MAIL_ID") REFERENCES "C##HALL_MANAGEMENT"."RESIDENT" ("MAIL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table OFFICIALS
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."OFFICIALS" ADD CONSTRAINT "SYS_C007886" FOREIGN KEY ("MAIL_ID") REFERENCES "C##HALL_MANAGEMENT"."PERSON" ("MAIL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table PERSON
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."PERSON" ADD CONSTRAINT "SYS_C007796" FOREIGN KEY ("HALL_NAME") REFERENCES "C##HALL_MANAGEMENT"."HALL" ("NAME") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table RESIDENT
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."RESIDENT" ADD CONSTRAINT "SYS_C007888" FOREIGN KEY ("MAIL_ID") REFERENCES "C##HALL_MANAGEMENT"."STUDENT" ("MAIL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table STUDENT
-- ----------------------------
ALTER TABLE "C##HALL_MANAGEMENT"."STUDENT" ADD CONSTRAINT "SYS_C007885" FOREIGN KEY ("MAIL_ID") REFERENCES "C##HALL_MANAGEMENT"."PERSON" ("MAIL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
