
-- -----------------------------------------------------
-- Schema registrationservicetut
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `registrationservicetut` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;



-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `registrationservicetut`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);

ALTER TABLE `registrationservicetut`.`user` 
ADD UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE;
;