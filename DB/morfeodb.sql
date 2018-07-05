CREATE DATABASE morfeodb;
USE morfeodb;
CREATE TABLE IF NOT EXISTS `users` (
	`iduser` INT(10) unsigned NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
    `email` VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
    `password` VARCHAR(200) COLLATE utf8_unicode_ci NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(`iduser`),
    UNIQUE KEY `users_email_unique` (`email`)    
) ENGINE=InnoDB DEFAULT CHARACTER SET=utf8;

DESCRIBE users;