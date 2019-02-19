update user_newsletters
set nslnewsradio = ${nslnewsradio}, nsl5television = ${nsl5television}, nsldeals = ${nsldeals}, nslcom = ${nslcom}
where user_id = ${id}
returning *;