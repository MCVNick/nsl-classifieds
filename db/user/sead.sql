drop table if exists user_info;
drop table if exists user_newsletters;
drop table if exists users;

create table users (
    id serial primary key not null,
    username varchar(30) unique not null,
    password varchar(255) not null,
    email varchar(255) unique not null,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    address varchar(255) not null,
    address2 varchar(255),
    city varchar(50) not null,
    state varchar(2) not null,
    zipcode varchar(25) not null
);

create table user_newsletters (
    user_id int references users(id) on delete cascade not null,
    primary key (user_id),
    NSLNewsradio BOOLEAN not null,
    NSL5Television BOOLEAN not null,
    NSLDeals BOOLEAN not null,
    NSLcom BOOLEAN not null
);

create table user_info (
    user_id int references users(id) on delete cascade not null,
    primary key (user_id),
    login_tally int,
    creation_time varchar(100),
    last_log_in_time varchar(100)
);