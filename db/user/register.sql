insert into users (username, password, profile_pic, email, first_name, last_name, address, city, state, zipcode)
values($(username), $(password), $(profile_pic), $(email), $(first_name), $(last_name), $(address), $(city), $(state), $(zipcode))
returning id, username, profile_pic, email, first_name, last_name, address, city, state, zipcode;