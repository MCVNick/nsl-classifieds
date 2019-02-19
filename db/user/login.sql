select * from users u
JOIN user_info i on i.user_id = u.id
JOIN user_newsletters n on n.user_id = u.id
where email ilike ${email};