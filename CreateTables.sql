CREATE DATABASE localEventFinder; 
USE localEventFinder; 


CREATE TABLE user (
	userid INT NOT NULL,
	userfname VARCHAR(65) NOT NULL,
	userlname VARCHAR(65) NOT NULL,
	userpassword VARCHAR(65) NOT NULL,
	useremail VARCHAR(65) NOT NULL,
	userlocation VARCHAR(215) NOT NULL,
	userinsta VARCHAR(65), 
	PRIMARY KEY (userid)
);

CREATE TABLE venue (
	venueid INT NOT NULL,
	venuename VARCHAR(100) NOT NULL,
	venuelocation VARCHAR(215) NOT NULL,
	PRIMARY KEY (venueid)
);

CREATE TABLE organizer (
	organizerid INT NOT NULL,
	organizername VARCHAR(65) NOT NULL,
	organizerpassword VARCHAR(65) NOT NULL,
	organizeremail VARCHAR(65) NOT NULL,
	PRIMARY KEY (organizerid)
);

CREATE TABLE event (
	eventid INT NOT NULL,
	eventname VARCHAR(100) NOT NULL,
	eventdesc VARCHAR(150) NOT NULL,
	eventdate DATE NOT NULL,
	eventtime VARCHAR(15) NOT NULL,
	venueid INT NOT NULL,
	organizerid INT NOT NULL,
	PRIMARY KEY (eventid),
	FOREIGN KEY (venueid) REFERENCES venue(venueid),
	FOREIGN KEY (organizerid) REFERENCES organizer(organizerid)
);

CREATE TABLE share (
	shareid INT NOT NULL,
	userid INT NOT NULL,
	eventid INT NOT NULL,
	PRIMARY KEY (shareid),
	FOREIGN KEY (userid) REFERENCES user(userid),
	FOREIGN KEY (eventid) REFERENCES event(eventid)
);

CREATE TABLE notification (
	notificationid INT NOT NULL,
	userid INT NOT NULL,
	eventid INT NOT NULL,
	PRIMARY KEY (notificationid),
	FOREIGN KEY (userid) REFERENCES user(userid),
	FOREIGN KEY (eventid) REFERENCES event(eventid)
);

