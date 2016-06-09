-- MySQL Script generated by MySQL Workbench
-- Thu Jun  8 22:29:21 2016
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema boilerplate
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `boilerplate` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `boilerplate` ;

-- -----------------------------------------------------
-- Table `boilerplate`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boilerplate`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(128) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `updated_at` INT UNSIGNED NOT NULL,
  `created_at` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `id_UNIQUE` ON `boilerplate`.`users` (`id` ASC);

CREATE UNIQUE INDEX `email_UNIQUE` ON `boilerplate`.`users` (`email` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;