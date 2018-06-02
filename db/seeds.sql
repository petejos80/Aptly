-- DROP DATABASE IF EXISTS apartmentdb;
CREATE DATABASE apartmentdb;

ALTER TABLE `apartmentdb2`.`users` 
ADD COLUMN `height` VARCHAR(45) NULL AFTER `updatedAt`;
