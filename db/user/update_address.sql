update users
set address = ${address}, address2 = ${address2}
where id = ${id}
returning *;