//NOTE --  TEXT IN WHITE FOR MYSQL, other colors are posts to DB via POSTMAN

--ADMINS
CREATE TABLE admins (
    id int AUTO_INCREMENT PRIMARY KEY,
    admin_name varchar(50) UNIQUE NOT NULL,
    admin_email varchar(50) UNIQUE NOT NULL,
    admin_password varchar(500) NOT NULL,
    roles varchar (100) NOT NULL);

ALTER TABLE `admins` MODIFY id CHAR(36);

select * from admins;
INSERT into admins(user_name, user_email, user_password , roles)

--Inserts made in Postman.  UUIDs automatically assigned, 
--maybe be possible to insert them directly - investigation required.
--POST, GET, UPDATE, and DELETE working at present time.
    [
        {
            "id": "8336b05f-56a1-44c4-a37f-52be182cf31d",
            "admin_name": "Curly Curates",
            "admin_email": "curator@mail.com",
            "admin_password": "$2b$10$4JvfEOlSyQ2Sa8O6/Lfyc.Zr0/iDkZ90vE0VuzinWnQSap2qrABay",
            "roles": "head curator"
        },
        {
            "id": "88ba3b93-c52c-4657-a198-611542d1c28b",
            "admin_name": "Marge Manages",
            "admin_email": "management@mail.com",
            "admin_password": "$2b$10$oWffRr7Kg5E4ZXo0c.kTYOEUTuePqsIPiKQT0LWr2gxqE2j03Ym0q",
            "roles": "i manage everything"
        },
        {
            "id": "c1adf9f8-2c2c-4acd-9c76-d3875ecbd556",
            "admin_name": "Sally Sales",
            "admin_email": "sales@mail.com",
            "admin_password": "$2b$10$iNTSXVjJd3xxmM2EHZdLJe2ha4qTG7k/UMCTwj8z.bYJc7o5kA3ta",
            "roles": "i sale art"
        }
    ]
______________________________________________________________________________________
//CUSTOMERS

CREATE TABLE customers (
    id int AUTO_INCREMENT PRIMARY KEY,
    user_name varchar(50) UNIQUE NOT NULL,
    user_email varchar(50) UNIQUE NOT NULL,
    user_password varchar(500) NOT NULL,
    user_address varchar(500) NOT NULL);

ALTER TABLE `customers` MODIFY id CHAR(36);

select * from customers;
INSERT into customers(user_name, user_email, user_password, user_address)

[
    {
    "id": "1",  --original entry, pre-UUID used for database test
    "user_name": "joBob",
    "user_email": "LoveArt@mail.com",
    "user_password": "goblidygoo", //pre PW hash
    "user_address": "111 Artway Dr"
},
{
    "id": "1a18e9c5-9c9d-4296-8ac2-082bc36e79b7",
    "user_name": "Jenny Dnt Xange Urnumber",
    "user_email": "jenny@mail.com",
    "user_password": "$2b$10$GZUAGQAcrA3t/qXuQbu.QuEQUPqplq64LsPy8gZQzPhFSuVZBcUbi", --8675309
    "user_address": "8675309 Allnight Dr."
},
{
    "id": "2", --original entry, pre-UUID used for database test
    "user_name": "janesArt",
    "user_email": "jane@mail.com",
    "user_password": "greenArt1", //prePW hash
    "user_address": "234 AguaVida"
},
    {
        "id": "ee828e44-7f95-494d-bf07-55328442c5db",
        "user_name": "Janeś Addiction",
        "user_email": "addicted2Art@mail.com",
        "user_password": "givememore",
        "user_address": "5813 Colorfulmess Way"
    }
]

______________________________________________________________________________________________
//ARTISIS

--POST,GET, PUT, DELETE Functioning correctly, need to add products correctly once 
--product numbers are created.  The field should auto-populate, but unsure how to 
--write that function at this time.

CREATE TABLE artists (
    id integer AUTO_INCREMENT PRIMARY KEY,
    artist_name varchar(200) UNIQUE NOT NULL,
    artist_image varchar(500) NOT NULL,
    artist_type varchar(200) NOT NULL,
    categories varchar(500) NOT NULL,
    biography varchar(1000) NOT NULL,
    products varchar(500) NOT NULL);

    ALTER TABLE `artists` MODIFY id CHAR(36);

select * from artists;

[
    {
        "id": "036c091f-2048-43c8-aef2-9b33dc8ca25b",
        "artist_name": "Sarah Abu Abdallah",
        "artist_image": "../images/SarahAbuAbdallah.jpeg",
        "artist_type": "Multidisciplinary Artist",
        "categories": "['Collage', 'Mixed-media', 'Photography', 'Textiles']",
        "biography": "Working across video, painting, and installations, her interests are centered on generating associations of the poetic and the absurd, integrating conversations she has with friends, family, and her community into her collaborative pieces. She creates speculative spaces and narrative assemblages based on fragments of reality colored by absurdity and awkwardness, drawing upon the forms of everyday life as well as her native experiences.",
        "products": "Fountain Splashing"
    },
    {
        "id": "14d3d96d-8db2-43ed-b190-f6f24ad7ebe7",
        "artist_name": "Barbara Kruger",
        "artist_image": "../images/BarbaraKruger.png",
        "artist_type": "Conceptual Artist",
        "categories": "['Sculpture', 'Collage', 'Mixed-media']",
        "biography": "Kruger rose to prominence in the 1980s for prints that juxtaposed black-and-white found photographs with bold, invented texts. In 1982, Kruger represented the United States at the Venice Biennale, and in 2005, she was awarded the Golden Lion for Lifetime Achievement.",
        "products": "Fountain Splashing"
    },
    {
        "id": "1ad616a1-12fa-4bb2-8417-84b6e3915753",
        "artist_name": "Carrie Mae Weems",
        "artist_image": "../images/CarrieMaeWeems.png",
        "artist_type": "Visual Artist",
        "categories": "['Collage', 'Photography']",
        "biography": "Steeped in African American history, Carrie Mae Weems makes alternately searing and tender photographs and videos that explore race, family, class, and gender identity. The artist, who has also worked in verse and performance, embraces activism throughout all her work—in particular, she looks to history in order to better understand the present.",
        "products": "Fountain Splashing"
    },
    {
        "id": "36a47110-b90e-4467-8cb8-658866b99cd5",
        "artist_name": "Louise Bourgeois",
        "artist_image": "../images/LouiseBourgeois.jpeg",
        "artist_type": "Multidisciplinary Artist",
        "categories": "['Paintings', 'Mixed-media', 'Sculpture', 'Textiles']",
        "biography": "In her wildly inventive practice, Louise Bourgeois explored materiality, gender norms, and the depths of her own psychology. While the artist is often associated with her feminine forms, giant spider sculptures, “cell” installations, and other three-dimensional works, Bourgeois's expansive, idiosyncratic practice also embraced painting, fiber art, printmaking, and books.",
        "products": "Fountain Splashing"
    },
    {
        "id": "47641d2c-3192-4513-8196-30f68232869c",
        "artist_name": "Yinka Shonibare",
        "artist_image": "../images/YinkaShonibare.jpeg",
        "artist_type": "Multidisciplinary Artist",
        "categories": "'Sculpture', 'Paintings', 'Mixed-media', 'Textiles'",
        "biography": "Throughout his colorful multimedia practice, Yinka Shonibare considers issues of postcolonialism and globalism and often references the distinctive batik cloth common in Nigeria. He also reconfigures iconic imagery from Western art history in his paintings, sculptures, photographs, films, and installations; the cultural and material relationships between Europe and Africa are common themes.",
        "products": "Fountain Splashing"
    },
    {
        "id": "ab47d531-6459-4718-9d85-040ef2beb002",
        "artist_name": "Ai Weiwei",
        "artist_image": "../images/AiWeiwei.jpeg",
        "artist_type": "Visual Artist",
        "categories": "['Collage', 'Mixed-media', 'Photography']",
        "biography": "Dissident artist Ai Weiwei is famous for conceptual artworks that challenge authority and explore the links between the contemporary world and traditional Chinese culture. His photographs, sculptures, films, performances, and installations earned him ire from the Chinese government, which imprisoned him for 81 days in 2011 and razed his studio in 2018.",
        "products": "Fountain Splashing"
    }
]


//PRODUCTS

--INDICATEDS POST Product created successfully, however unable to display products with GET

CREATE TABLE products (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(500) UNIQUE NOT NULL,
    artist_id VARCHAR(100) NOT NULL, 
    artist_name VARCHAR(100) NOT NULL,
    product_size VARCHAR(500),
    product_materials VARCHAR(500),
    product_description VARCHAR(1000) NOT NULL,
    product_category VARCHAR(500),
    price FLOAT NOT NULL,
    stock FLOAT,
    product_image VARCHAR(500) NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
ALTER TABLE `products` MODIFY id CHAR(36);
ALTER TABLE `products` ADD FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE CASCADE;


[
    {
        "id": "1d968d0d-04b0-4cf2-a810-b99aafa33da3",
        "product_name": "Modern Spiritual I, 2023",
        "artist_id": "47641d2c-3192-4513-8196-30f68232869c",
        "artist_name": "Yinka Shonibare",
        "product_size": "124.6 × 100.6 × 0.1 cm",
        "product_materials": null,
        "product_description": "Shonibare's adept fusion of materials and cultural symbols in this sculpture serves as a powerful representation of the intersection between diverse cultural narratives and artistic expressions.",
        "product_category": "Painting, Collage”",
        "price": 300,
        "stock": 10,
        "product_image": "../../../../../server/images/Shonibare-Painting-2023.png"
    },
    {
        "id": "78cf1b78-e654-417e-9e84-9fed4e3075c6",
        "product_name": "Hybrid Mask II (K’peliye’e), 2021",
        "artist_id": "47641d2c-3192-4513-8196-30f68232869c",
        "artist_name": "Yinka Shonibare",
        "product_size": "20 × 8 × 8 cm",
        "product_materials": null,
        "product_description": "This artwork represents Shonibare's exploration of cultural amalgamation and the complexities of identity. The fusion of materials and the intricately painted mask evoke a sense of cultural hybridity and the interwoven narratives of different traditions.",
        "product_category": "Sculpture",
        "price": 295,
        "stock": 1,
        "product_image": "../../../../../server/images/Shonibare-Hybrid-2021.png"
    },
    {
        "id": "95d12871-3572-4ac9-b57c-5f33a01146ca",
        "product_name": "In the Mountains of Santiago de Cuba, 2002",
        "artist_id": "1ad616a1-12fa-4bb2-8417-84b6e3915753",
        "artist_name": "Carrie Mae Weems",
        "product_size": "78.7 × 78.7 cm",
        "product_materials": "Gelatin silver print.",
        "product_description": "The artwork serves as a visual narrative that invites viewers to immerse themselves in the enchanting scenery and contemplate the profound connection between people and their natural surroundings.",
        "product_category": "Photography",
        "price": 230,
        "stock": 10,
        "product_image": "../../../../../server/images/Weems-Mountains-2002.png"
    },
    {
        "id": "a27492a8-6980-4c2d-bc86-322631c59949",
        "product_name": "Champagne Kid (Sitting), 2013",
        "artist_id": "47641d2c-3192-4513-8196-30f68232869c",
        "artist_name": "Yinka Shonibare",
        "product_size": "115 × 70 × 82 cm",
        "product_materials": null,
        "product_description": "This intriguing artwork by Yinka Shonibare, titled 'Champagne Kid (Sitting)' from 2013, combines elements of Dutch wax printed cotton textile, resin, a chair, a globe, and a champagne bottle. Shonibare's fusion of various materials and cultural symbols creates a striking commentary on identity, globalization, and the interplay between different cultures.",
        "product_category": "Sculpture, Mixed-media",
        "price": 950,
        "stock": 1,
        "product_image": "../images/Shonibare-Champagne-2013.png"
    },
    {
        "id": "c0370a37-858d-4b85-83a9-fd07335a5040",
        "product_name": "Lewitt's Wall, 2003-2005",
        "artist_id": "1ad616a1-12fa-4bb2-8417-84b6e3915753",
        "artist_name": "Carrie Mae Weems",
        "product_size": "67.9 × 57.8 cm",
        "product_materials": null,
        "product_description": "Weems employs her distinctive artistic perspective to capture the essence of architectural structures, potentially drawing inspiration from the minimalist artist Sol Lewitt. Weems's approach to this piece prompts viewers to contemplate the intersection of art, space, and perception.",
        "product_category": "Photography",
        "price": 250,
        "stock": 10,
        "product_image": "../images/Weems-Lewitts-2002.png"
    }
]


{
        "product_name": "I Have Been to Hell and Back Handkerchief (Red), 2009", 
        "artist_id": "36a47110-b90e-4467-8cb8-658866b99cd5",
        "artist_name": "Louise Bourgeois",
        "product_size": "29.2 × 30.5 cm ",
        "product_materials": "Embroidery on 100% Cotton Handkerchief",
        "product_description": "The title, 'I Have Been to Hell and Back', hints at a profound and perhaps tumultuous personal journey, and the medium of embroidery suggests a delicate and labor-intensive process to convey the artist's message or experience.",
        "product_category": "Textile" ,
        "price": 530,
        "stock": 1,
        "product_image": "../../../../../server/images/Bourgeois-Hackerchief-2009.png"
    }


______________________________________________________________________________________

--ORDERS

CREATE TABLE orders(
	id	integer AUTO_INCREMENT PRIMARY KEY,
	customer_id	varchar(500) NOT NULL,
	product_ids	varchar(500) NOT NULL,
	order_price	FLOAT NOT NULL,
    order_status varchar(50) NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
    
ALTER TABLE `orders` MODIFY id CHAR(36);
ALTER TABLE `orders` ADD FOREIGN KEY (`products`) REFERENCES `products` (`product_name`),
ADD FOREIGN KEY (`customers`) REFERENCES `customers` (`user_name`) ON DELETE SET NULL;
    
select * from orders;



[
    {
        "id": "068c40cd-5e31-4fca-86ed-f4b77b4c431e",
        "customer_id": "1a18e9c5-9c9d-4296-8ac2-082bc36e79b7",
        "product_ids": "1d968d0d-04b0-4cf2-a810-b99aafa33da3, 78cf1b78-e654-417e-9e84-9fed4e3075c6",
        "order_price": 595,
        "order_status": "Processing"
    },
    {
        "id": "6a228f22-025e-4817-9f43-f00b8764f3a0",
        "customer_id": "1a18e9c5-9c9d-4296-8ac2-082bc36e79b7",
        "product_ids": "1d968d0d-04b0-4cf2-a810-b99aafa33da3",
        "order_price": 300,
        "order_status": "Processing"
    }
]
