update users
set alt_phone = ${alt_phone}
where id = ${id}
returning *;