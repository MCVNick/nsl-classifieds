update users
set email = ${email}
where id = ${id}
returning id, username, profile_pic, email, first_name, last_name, address, city, state, zipcode;