DROP SCHEMA IF EXISTS bulletin_board;

CREATE SCHEMA bulletin_board;

USE bulletin_board;

DROP TABLE IF EXISTS t_description;

CREATE TABLE
    IF NOT EXISTS t_description (
        id int auto_increment,
        user_name varchar(64),
        content varchar(255),
        PRIMARY KEY (id)
    );

INSERT INTO
    t_description (user_name, content)
    VALUES ('tomo', 'dockerテスト')
   