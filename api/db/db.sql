create database yelp;

create table restaurants (
    id serial not null primary key,
    name varchar(50) not null,
    location varchar(50) not null,
    price_range int not null check(
        price_range >= 1
        and price_range <= 5
    )
);

CREATE TABLE reviews (
    id SERIAL NOT NULL PRIMARY KEY,
    restaurant_id INT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(
        rating >= 1
        and rating <= 5
    )
);