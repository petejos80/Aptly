-- DROP DATABASE IF EXISTS apartmentdb;
CREATE DATABASE apartmentdb;

INSERT INTO users(userId, userName, userPsswd, firstName, lastName, unitNumber, leaseEnd, email, phone, interest, address, geoLocation, cookies, createdAt, updatedAt) 
VALUES ("0", "jj4567", "password1", "JR", "Brown", "222", "12312018", "jcr48@gmail.com", "6121112222", "music", "123 main st", "127.0.0.0", "aefewgew", NOW(), NOW());
