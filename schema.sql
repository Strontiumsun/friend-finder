CREATE DATABASE friend_finder;
USE friend_finder;

CREATE TABLE profiles (
    name VARCHAR(25),
    photo VARCHAR(255),
    scores LONGTEXT
);

INSERT INTO profiles (name, photo, scores)
VALUES ("Ogilvie", "https://file.toyhou.se/images/2304344_GJxEiudvJzIr2Zx.png", "4,2,3,5,1,4,5,4,1,5" ),
("Cleo", "https://file.toyhou.se/images/5149237_fFP1D4Y8PxGRsGK.png", "5,1,4,3,4,5,5,5,3,4"),
("Jane", "https://file.toyhou.se/images/2304423_mxFXYd52Wfk0bsj.png", "1,1,1,3,1,4,5,5,1,2"),
("Cyrus", "https://file.toyhou.se/images/12126119_vzOmdKT02bTR2gS.png", "5,3,5,3,5,4,4,2,2,3"),
("The Cardboard Defender", "https://file.toyhou.se/images/7836022_XmKztUBvi1XnWOC.png", "5,1,3,5,2,3,5,3,2,4"),
("Gatchi", "https://66.media.tumblr.com/5122191be8ff945f513c47917d24e28d/tumblr_og8u87B0bd1qjs67jo1_640.png", "2,2,1,4,4,5,5,5,1,3");

SELECT * FROM profiles;

