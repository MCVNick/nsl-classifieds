module.exports = {
    getUser: (req, res) => {
        const {user} = req.session
        
        if(user) {
            res.send(user)
        } else {
            res.status(400).send('No user on session')
        }
    },
    updateEmail: async (req, res) => {
        const { id, email } = req.body
        const db = req.app.get('db')
        const { session } = req

        let user = await db.user.update_email({id, email})
        user = user[0]

        session.user = user
        res.send(session.user)
    },
    updateName: (req, res) => {
        
    },
    updateAddress: (req, res) => {
        
    },
    updatePassword: (req, res) => {
        
    },
    updateProfilePic: (req, res) => {
        
    },
    deleteUser: (req, res) => {
        
    }
}