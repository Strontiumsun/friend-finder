CREATE DATABASE friend_finder;
USE friend_finder;

CREATE TABLE profiles (
    name VARCHAR(25),
    photo VARCHAR(255),
    scores VARCHAR(25)
);

INSERT INTO profiles (name, photo, scores)
VALUES ("Ogilvie", "https://file.toyhou.se/images/2304344_GJxEiudvJzIr2Zx.png", "5" ),
("Cleo", "https://file.toyhou.se/characters/258611?1479353898", "4"),
("Jane", "https://file.toyhou.se/images/2304423_mxFXYd52Wfk0bsj.png", "3");

SELECT * FROM profiles;