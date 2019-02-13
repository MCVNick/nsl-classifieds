update users
set first_name = ${first_name}, last_name = ${last_name}
where id = ${id}
returning id, username, profile_pic, email, first_name, last_name, address, city, state, zipcode;