create database yelp;

create table restaurants (
    id serial not null primary key,
    name varchar(50) not null,
    location varchar(50) not null,
    price_range int not null check(price_range >= 1 amd price_range <= 5)
);