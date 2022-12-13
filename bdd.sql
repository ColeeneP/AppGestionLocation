CREATE DATABASE IF NOT EXISTS immovable;
\c library;

CREATE TABLE IF NOT EXISTS tenant (
    id INT NOT NULL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    birthday DATE NOT NULL,
    phone VARCHAR NOT NULL,
    email VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS flat (
    id INT NOT NULL PRIMARY KEY,
    address VARCHAR NOT NULL,
    additonal VARCHAR NOT NULL,
    postal_code CHAR(5) NOT NULL,
    city VARCHAR NOT NULL,
    rent VARCHAR NOT NULL,
    charges VARCHAR NOT NULL,
    deposit VARCHAR NOT NULL,
    available BOOLEAN NOT NULL DEFAUT 0
);

CREATE TABLE IF NOT EXISTS rental (
    id INT NOT NULL PRIMARY KEY,
    flat INT NOT NULL,
    FOREIGN KEY (flat) REFERENCES flat(id),
    tenant INT NOT NULL,
    FOREIGN KEY (tenant) REFERENCES tenant(id),
    deposit BOOLEAN
);

CREATE TABLE IF NOT EXISTS payment (
    id INT NOT NULL PRIMARY KEY,
    rental INT NOT NULL,
    FOREIGN KEY (rental) REFERENCES rental(id),
    date DATE,
    origin VARCHAR,
    amount VARCHAR
);

CREATE TABLE IF NOT EXISTS inventory (
    id INT NOT NULL PRIMARY KEY,
    rental INT NOT NULL,
    FOREIGN KEY (rental) REFERENCES rental(id),
    status ENUM('ingoing', 'outgoing'),
    date DATE,
    notes TEXT
);

CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);