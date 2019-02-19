with insert_one as (
    insert into users (email, first_name, last_name, address, address2, city, state, zipcode, password, username)
    values(${email}, ${first_name}, ${last_name}, ${address}, ${address2}, ${city}, ${state}, ${zipcode}, ${password}, ${username})
    returning *
)
, insert_two as (
    insert into user_newsletters (user_id, NSLNewsradio, NSL5Television, NSLDeals, NSLcom)
    values((select id from insert_one), ${NSLNewsradio}, ${NSL5Television}, ${NSLDeals}, ${NSLcom})
    returning *
)
, insert_three as (
    insert into user_info (user_id, login_tally, creation_time, last_log_in_time)
    values ((select id from insert_one), 1, ${time}, ${time})
    returning *
)
select * from insert_one, insert_two, insert_three
where id = (select id from insert_one);