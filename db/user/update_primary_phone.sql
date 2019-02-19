update users
set primary_phone = ${primary_phone}
where id = ${id}
returning *;