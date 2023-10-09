CREATE DATABASE DoArt;

USE DoArt;

CREATE TABLE artists (
    id integer AUTO_INCREMENT PRIMARY KEY,
    artist_name varchar(50) UNIQUE NOT NULL,
    products varchar(500) NOT NULL,
    categories varchar(500) NOT NULL);

select * from artists;
insert into artists(artist_name, products, categories)
VALUES ("Julie Balsaux", "Enfaces 2", "Cubism, Watercolor"),
	("Erik Bonnet", "Stagman", "Painting, Drawing, Anthropomorphisim");



CREATE TABLE products (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50) UNIQUE NOT NULL,
    artist_id INTEGER NOT NULL,
    product_description VARCHAR(500) NOT NULL,
    category VARCHAR(50),
    price FLOAT NOT NULL,
    stock FLOAT
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE `products` ADD FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE CASCADE;

select * from products;
insert into products(product_name, artist_id, product_description, category, price, stock)
VALUES ("Stagman", 2, "Oil painting: an anthropomorphic deer figure", "Oil on Canvas", 1500.00, 1),
	("Enfaces 2", 1, "A haunting take on childhood", "WaterColor, Cubism", 1310.00 , 1);

CREATE TABLE admins (
    id int AUTO_INCREMENT PRIMARY KEY,
    user_name varchar(50) UNIQUE NOT NULL,
    user_email varchar(50) UNIQUE NOT NULL,
    user_password varchar(50) NOT NULL,
    roles varchar (100) NOT NULL);

select * from admins;
INSERT into admins(user_name, user_email, user_password , roles)
VALUES ("curator", "curator@mail.com", "iknowart" , "head curator"),
	("manager", "management@mail.com", "onmywall" , "gallery manager");

CREATE TABLE customers (
    id int AUTO_INCREMENT PRIMARY KEY,
    user_name varchar(50) UNIQUE NOT NULL,
    user_email varchar(50) UNIQUE NOT NULL,
    user_password varchar(50) NOT NULL,
    address varchar(500) NOT NULL);

select * from customers;
INSERT into customers(user_name, user_email, user_password, address)
VALUES ("joBob", "LoveArt@mail.com", "goblidygoo", "111 Artway Dr"),
	    ("janesArt", "jane@mail.com", "greenArt1", "234 AguaVida");

CREATE TABLE orders(
	id	integer AUTO_INCREMENT PRIMARY KEY,
	customer	varchar(50) NOT NULL,
	products	varchar(500) NOT NULL,
	quantity	integer NOT NULL,
	price	FLOAT NOT NULL,
    	order_status varchar(50) NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
    
    ALTER TABLE `orders` ADD FOREIGN KEY (`products`) REFERENCES `products` (`product_name`),
	ADD FOREIGN KEY (`customer`) REFERENCES `customers` (`user_name`) ON DELETE SET NULL;
    
select * from orders;
INSERT into orders(customer, products, quantity, price, order_status)
VALUES("joBob", "Stagman", 1 , 1500.00 , "processing"),
	("janesArt", "Enfaces 2", 1 , 1500.00, "shipped");