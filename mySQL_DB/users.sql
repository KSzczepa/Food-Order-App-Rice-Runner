CREATE DATABASE user_data;

CREATE TABLE `user_data`.`users` (
	ID varchar(5),
    login varchar(60),
    password varchar(200),
    email varchar(100),
    name varchar(20), 
    street varchar(100), 
    city varchar(20), 
    postalCode varchar(5), 
    phoneNumber varchar(9)
);

INSERT INTO `user_data`.`users` (ID, login, password, email, name, street, city, postalCode, phoneNumber)
VALUES ('00000', 'admin', 'sha1$f0636b3d$1$b8d5654ee8569ea7b33c3ff45decd15d21df2592', 'admin@admin.com', 'Admin', 'adminowo', 'adminowo', '00000', '123456789');