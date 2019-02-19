update users
set city = ${city}, state = ${state}, zipcode = ${zipcode}
where id = ${id}
returning *;