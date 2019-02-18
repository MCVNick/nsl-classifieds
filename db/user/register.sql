with insert_one as (
    insert into users (email, first_name, last_name, address, address2, city, state, zipcode, password, username)
    values(${email}, ${first_name}, ${last_name}, ${address}, ${address2}, ${city}, ${state}, ${zipcode}, ${password}, ${username})
    returning id
)
, insert_two as (
    insert into user_newsletters (user_id, NSLNewsradio, NSL5Television, NSLDeals, NSLcom)
    values((select id from insert_one), ${NSLNewsradio}, ${NSL5Television}, ${NSLDeals}, ${NSLcom})
)
, insert_three as (
    insert into user_info (user_id, login_tally, creation_time, last_log_in_time)
    values ((select id from insert_one), 1, ${time}, ${time})
)

select * from users u
JOIN user_info i on i.user_id = u.id
JOIN user_newsletters n on n.user_id = u.id;