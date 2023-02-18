CREATE TABLE person (
	id SERIAL NOT NULL,
	name VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE category (
	id SERIAL NOT NULL,
	title VARCHAR(255) NOT NULL,
	color VARCHAR(7) NOT NULL DEFAULT '#FFFFFF',
	person_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (person_id) REFERENCES person(id) 
);

CREATE TABLE task (
	id SERIAL NOT NULL,
	category_id INT NOT NULL,
	description VARCHAR(255) NOT NULL,
	is_checked BOOL DEFAULT false,
	PRIMARY KEY (id),
	FOREIGN KEY (category_id) REFERENCES category(id) 
);

INSERT INTO  person (name)
VALUES ('user');