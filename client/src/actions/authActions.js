import axios from 'axios';
import { GET_ERRORS , SET_CURRENT_USER} from './types';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';


/**Register user */
export const registerUser = (userData) => dispatch => {
    axios.post('/api/users/register' , userData)
         .then(res => {
             console.log(res.data);
         })
         .catch(err => dispatch({
             type : GET_ERRORS ,
             payload : err.response.data
         }));
}

export const loginUser = (userData) => dispatch => {
    axios.post('/api/users/login' , userData)
         .then( res => {
             const {token} = res.data;
             localStorage.setItem('jwtToken' , token);

             setAuthToken(token);

             const decoded_user = jwt_decode(token);

            dispatch(setCurrentUser(decoded_user));

         })
         .catch(err => dispatch({
             type : GET_ERRORS ,
             payload : err.response.data
         }));
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}

export const setCurrentUser = (decoded_user) => ({
        type : SET_CURRENT_USER ,
        payload : decoded_user
});