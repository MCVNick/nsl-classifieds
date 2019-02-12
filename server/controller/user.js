module.exports = {
    getUser: (req, res) => {
        const {user} = req.session
        
        if(user) {
            res.send(user)
        } else {
            res.status(400).send('No user on session')
        }
    },
    updateEmail: (req, res) => {
        
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