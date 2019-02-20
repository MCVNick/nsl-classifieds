create table weather_calls (
    id serial primary key,
    time text not null,
    calls int not null
);

insert into weather_calls (time, calls)
values('no-time', 0)