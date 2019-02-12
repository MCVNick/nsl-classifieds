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
        const { username, password } = req.body
        const db = req.app.get('db')
        const { session } = req

        let user = await db.user.login({username})
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
    getUser: (req, res) => {
        const {user} = req.session

        console.log(user)
        
        if(user) {
            res.send(user)
        } else {
            res.status(400).send('No user on session')
        }
    }
}