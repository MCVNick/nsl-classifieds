update users
set address = ${address}, city = ${city}, state = ${state}, zipcode = ${zipcode}
where id = ${id}
returning id, username, profile_pic, email, first_name, last_name, address, city, state, zipcode;