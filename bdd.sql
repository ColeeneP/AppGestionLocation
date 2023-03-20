CREATE DATABASE immovable;
\c immovable;

CREATE TABLE IF NOT EXISTS tenant (
    id INT NOT NULL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    birthday DATE NOT NULL,
    phone VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
);

CREATE TABLE IF NOT EXISTS property (
    id INT NOT NULL PRIMARY KEY,
    address VARCHAR NOT NULL,
    additonal VARCHAR,
    postal_code CHAR(5) NOT NULL,
    city VARCHAR NOT NULL,
    rent VARCHAR NOT NULL,
    charges VARCHAR NOT NULL,
    deposit VARCHAR NOT NULL,
    available BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE IF NOT EXISTS rental (
    id INT NOT NULL PRIMARY KEY,
    property INT NOT NULL,
    FOREIGN KEY (property) REFERENCES property(id),
    tenant INT NOT NULL,
    FOREIGN KEY (tenant) REFERENCES tenant(id),
    deposit BOOLEAN DEFAULT false
);

CREATE TABLE IF NOT EXISTS payment (
    id INT NOT NULL PRIMARY KEY,
    rental INT NOT NULL,
    FOREIGN KEY (rental) REFERENCES rental(id),
    date DATE DEFAULT CURRENT_TIMESTAMP,
    origin VARCHAR,
    amount VARCHAR
);

CREATE TYPE status AS ENUM ('ingoing', 'outgoing');

CREATE TABLE IF NOT EXISTS inventory (
    id INT NOT NULL PRIMARY KEY,
    property INT NOT NULL,
    FOREIGN KEY (property) REFERENCES property(id),
    status status,
    date DATE,
    notes TEXT
);