CREATE TABLE person (
	id SERIAL NOT NULL,
	name VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE color(
	id SERIAL NOT NULL,
	title VARCHAR(25),
	hex_code VARCHAR(7),
	PRIMARY KEY (id)
);

CREATE TABLE category (
	id SERIAL NOT NULL,
	title VARCHAR(255) NOT NULL,
	color_id INT NOT NULL DEFAULT 1,
	person_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (person_id) REFERENCES person(id),
	FOREIGN KEY (color_id) REFERENCES color(id)
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
VALUES ('user'), ('Иван');

INSERT INTO color(title, hex_code) 
VALUES ('White', '#FFFFFF'), ('Red', '#FF0000'), ('Green', '#00FF00'), ('Blue', '#0000FF');

INSERT INTO category (title, color_id, person_id)
VALUES ('Test1', 2, 1);