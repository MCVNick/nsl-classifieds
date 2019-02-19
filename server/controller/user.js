module.exports = {
    getUser: (req, res) => {
        const { user } = req.session

        if (user) {
            res.send(user)
        } else {
            res.status(400).send('Could not find session user')
        }
    },
    updateAddress: async (req, res) => {
        const { id, address, address2 } = req.body
        const db = req.app.get('db')
        const { session } = req
        const { user: oldUser } = session

        let user = await db.user.update_address({ id, address, address2 })
        user = user[0]

        session.user = {...oldUser, ...user}
        res.send(session.user)
    },
    updateCity: async (req, res) => {
        const { id, city, state, zipcode } = req.body
        const db = req.app.get('db')
        const { session } = req
        const { user: oldUser } = session

        let user = await db.user.update_city({ id, city, state, zipcode })
        user = user[0]

        session.user = {...oldUser, ...user}
        res.send(session.user)
    },
    updatePrimaryPhone: async (req, res) => {
        const { id, primary_phone } = req.body
        const db = req.app.get('db')
        const { session } = req
        const { user: oldUser } = session

        let user = await db.user.update_primary_phone({ id, primary_phone })
        user = user[0]

        session.user = {...oldUser, ...user}
        res.send(session.user)
    },
    updateAltPhone: async (req, res) => {
        const { id, alt_phone } = req.body
        const db = req.app.get('db')
        const { session } = req
        const { user: oldUser } = session

        let user = await db.user.update_alt_phone({ id, alt_phone })
        user = user[0]

        session.user = {...oldUser, ...user}
        res.send(session.user)
    },
    updateNewsletters: async (req, res) => {
        const { id, nslnewsradio, nsl5television, nsldeals, nslcom } = req.body
        const db = req.app.get('db')
        const { session } = req
        const { user: oldUser } = session

        let user = await db.user.update_newsletters({ id, nsl5television, nslnewsradio, nsldeals, nslcom })
        user = user[0]

        session.user = {...oldUser, ...user}
        res.send(session.user)
    },
    deleteUser: (req, res) => {
        const { id } = req.params
        const db = req.app.get('db')
        req.session.destroy()

        db.user.delete_user({ id })
        res.sendStatus(200)
    }
}