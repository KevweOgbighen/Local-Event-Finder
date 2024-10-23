SET FOREIGN_KEY_CHECKS=0;

INSERT INTO user (userid, userfname, userlname, userpassword, useremail, userlocation, userinsta)
VALUES 
(1, "Jane", "Doe", "janepass", "jane@mail.com", "Atlanta", "@jane"),
(2, "Alex", "Smith", "alexpass", "alex@mail.com", "Chicago", "@alex"),
(3, "Dan", "Johnson", "danpass", "dan@mail.com", "Atlanta", "@dan"),
(4, "Joe", "Brown", "joepass", "joe@mail.com", "Miami", "@joe"),
(5, "Cindy", "Hall", "cindypass", "cindy@mail.com", "Miami", "@cindy");

INSERT INTO venue (venueid, venuename, venuelocation)
VALUES
(20, "ConcertHall", "Atlanta"),
(21, "SportArena", "Atlanta"),
(22, "OperaHouse", "Atlanta"),
(23, "SportStadium", "Miami"),
(24, "NightClub", "Miami"),
(25, "ArtMuseum", "Chicago");

INSERT INTO organizer (organizerid, organizername, organizerpassword, organizeremail)
VALUES
(30, "MusicGroup", "musicpass", "contact@music.com"), 
(31, "SportGroup", "sportpass", "contact@sport.com"), 
(32, "FunGroup", "funpass", "contact@fun.com"), 
(33, "CultureGroup", "culturepass", "contact@culture.com");

INSERT INTO event (eventid, eventname, eventdesc, eventdate, eventtime, venueid, organizerid)
VALUES 
(40, "Taylor Swift", "World Tour", "2025-01-19", "19:00", 20, 30),
(41, "Beyoncé", "World Tour", "2025-02-03", "19:00", 20, 30),
(42, "Rihanna", "World Tour", "2025-03-30", "19:00", 20, 30),
(43, "Super Bowl", "Chiefs vs Vikings", "2025-02-09", "20:00", 21, 31),
(44, "The Marriage of Figaro", "Great Music and Characters!", "2025-05-02", "18:00", 22, 30),
(45, "World Series", "Dodgers vs Mets","2025-10-25", "18:00", 23, 31),
(46, "Speed Dating", "Meet someone new!", "2025-02-10", "19:15", 24, 32),
(47, "Throwback Dance Party", "Have fun to some 00s hits!", "2025-06-17", "20:00", 24, 32),
(48, "Culture Night", "Learn about Medieval Times.", "2025-03-08", "18:15", 25, 33),
(49, "Watercolors", "Rising artist's first expo.", "2024-12-19", "18:45", 25, 33);

INSERT INTO share (shareid, userid, eventid)
VALUES
(50, 1, 41),
(51, 5, 49);

INSERT INTO notification (notificationid, userid, eventid)
VALUES
(60, 1, 41),
(61, 5, 49);