const initialState = {
    id: 0,
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    profile_pic: ''
}

const UPDATE_USER = 'UPDATE_USER'

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATE_USER:
            const { id, username, profile_pic, first_name, last_name } = payload
            return { ...state, id, username, profile_pic, first_name, last_name }
        default:
            return state
    }
}

export function updateUser(userObj) {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}