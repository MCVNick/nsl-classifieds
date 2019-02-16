const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password, profile_pic, email, first_name, last_name, address, city, state, zipcode } = req.body
        const db = req.app.get('db')
        const { session } = req

        let user = await db.user.check_user({username: username})
        user = user[0]
        if(user) {
            return res.status(400).send('User already created')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.user.register({username, password: hash, profile_pic, email, first_name, last_name, address, city, state, zipcode})
        newUser = newUser[0]

        session.user = {...newUser}

        res.status(201).send(session.user)
    },
    login: async (req, res) => {
        const { email, password } = req.body
        const db = req.app.get('db')
        const { session } = req

        let user = await db.user.login({email})
        user = user[0]
        if(!user) {
            return res.status(400).send('User not found')
        }

        const foundUser = bcrypt.compareSync(password, user.password)
        if(foundUser) {
            delete user.password
            session.user = user
            res.send(session.user)
        }
        else {
            res.status(401).send('Incorrect password')
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    verifyPassword: async (req, res) => {
        const { id, password } = req.body
        const db = req.app.get('db')

        let user = await db.user.check_password({id})
        user = user[0]

        const foundUser = bcrypt.compareSync(password, user.password)
        if(foundUser) {
            delete user.password
            res.sendStatus(200)
        }
        else {
            res.status(401).send('Incorrect password')
        }
    },
    updatePassword: async (req, res) => {
        const { id, password } = req.body
        const db = req.app.get('db')
        const { session } = req

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let user = await db.user.update_password({ id, password: hash })
        user = user[0]

        session.user = user
        res.send(session.user)
    }
}