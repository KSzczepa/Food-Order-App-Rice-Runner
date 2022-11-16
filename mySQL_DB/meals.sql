CREATE TABLE `food_db1`.`meals` (
	mealID varchar(2),
    mealName varchar(60),
    mealDesc varchar(150),
    mealPrice float
);

INSERT INTO `food_db1`.`meals` (mealID, mealName, mealDesc, mealPrice)
VALUES ('m1', 'Sushi', 'A Japanese dish featuring speciallypared rice, salmon, cucumber and surimi.', 15.5);

INSERT INTO `food_db1`.`meals` (mealID, mealName, mealDesc, mealPrice)
VALUES ('m2', 'Won-Ton Soup', 'Standard of Chinese cusine, made from seasoned chicken broth with filled wontons.', 3.5);

INSERT INTO `food_db1`.`meals` (mealID, mealName, mealDesc, mealPrice)
VALUES ('m3', 'Ramen', 'Japanese noodle soup with a combination of broth, one type of noodle and meats or vegetables.', 12);

INSERT INTO `food_db1`.`meals` (mealID, mealName, mealDesc, mealPrice)
VALUES ('m4', 'Pad Thai', 'A Thai dish of stir-fried rice noodles with eggs, vegetables and tofu in a sauce.', 7.5);