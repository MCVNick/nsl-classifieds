create table users (
    id serial primary key not null,
    username varchar(30) unique not null,
    password varchar(255) not null,
    profile_pic text not null,
    email varchar(255) unique not null,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    address varchar(255) not null,
    city varchar(50) not null,
    state varchar(2) not null,
    zipcode varchar(25) not null
)