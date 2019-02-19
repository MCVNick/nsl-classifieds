update user_info
set login_tally = login_tally + 1
where user_id = (
    select id from users
    where email = ${email}
);

update user_info
set last_log_in_time = ${time}
where user_id = (
    select id from users
    where email = ${email}
);

select * from users u
JOIN user_info i on i.user_id = u.id
JOIN user_newsletters n on n.user_id = u.id
where email ilike ${email};