CREATE TABLE "user" (
	user_id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(128) NOT NULL,
	email VARCHAR(128) UNIQUE NOT NULL,
	password VARCHAR(128) NOT NULL,
	photo VARCHAR(128) NOT NULL,
    location VARCHAR(128) NOT NULL
);


CREATE TABLE COACH (
	coach_id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(128) NOT NULL,
	email VARCHAR(128) UNIQUE NOT NULL,
	password VARCHAR(128) NOT NULL,
	photo VARCHAR(128) NOT NULL,
    location VARCHAR(128) NOT NULL,
    DESCRIPTION VARCHAR(128) NOT NULL,
    PRICE INTEGER NOT NULL,
    CALIFICATION INTEGER NOT NULL,
	USER_ID INTEGER,
	CONSTRAINT FK_USER_ID FOREIGN KEY (USER_ID) REFERENCES "user"(USER_ID)
);