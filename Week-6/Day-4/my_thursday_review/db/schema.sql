-- user table

create table user
(
	id serial primary key,
    username varchar(70),
    password varchar(18),
    first_name varchar(100),
    last_name varchar(100)
);

-- products table

create table products2
(
	id serial primary key,
    name varchar(50),
    description text,
    price integer,
    imageurl varchar(500),
    user_id integer references users(id)
);
