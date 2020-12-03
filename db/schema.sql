DROP DATABASE IF EXISTS burgers_db; 
CREATE DATABASE burgers_db; 
USE burgers_db; 

CREATE TABLE burgers (
    id int UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    burger_name VARCHAR(30) UNIQUE NOT NULL, 
    devoured BOOLEAN
)
