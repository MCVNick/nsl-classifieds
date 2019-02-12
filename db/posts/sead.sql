create table messages (
    id serial primary key,
    content varchar(10000) not null,
    to_user int references users(id) not null,
    from_user int references users(id) not null
)