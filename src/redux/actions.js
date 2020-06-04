const BASE_URL = 'http://localhost:3000';
const USERS_URL = BASE_URL + '/users';
const PERSIST_URL = BASE_URL + '/persist';
const LOGIN_URL = BASE_URL + '/login';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

// Redux Actions

const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
});

const clearUserAction = () => ({
    type: 'CLEAR_USER'
});

// Fetch

const newUser = userObj => dispatch => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
    };
    fetch(USERS_URL, config)
        .then(r => r.json())
        .then(data => {
            dispatch(setUserAction(data.user));
            localStorage.setItem('token', data.token);
        });
};

const deleteUser = userId => dispatch => {
    const config = {
        method: 'DELETE'
    };
    fetch(SPECIFIC_USER_URL(userId), config)
        .then(r => {
            dispatch(clearUserAction());
            localStorage.clear();
        });
};

const loginUser = userCredentials => dispatch => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCredentials)
    };
    fetch(LOGIN_URL, config)
        .then(r => r.json())
        .then(data => {
            dispatch(setUserAction(data.user));
        });
};

const persistUser = () => dispatch => {
    const config = {
        method: 'GET',
        headers: {
            'Authorization': 'bearer' + localStorage.token
        }
    };
    fetch(PERSIST_URL, config)
        .then(r => r.json())
        .then(user => {
            dispatch(setUserAction(user));
        });
};

const logoutUser = () => dispatch => {
    dispatch(clearUserAction());
    localStorage.clear();
};

export default {
    newUser,
    deleteUser,
    loginUser,
    persistUser,
    logoutUser
};