import axios from 'axios';
import { GET_FOODS , ADD_TO_CART , GET_CART ,  GET_ERRORS, SUB_QUANTITY , REMOVE_ITEM} from './types';

export const getFoods = () => dispatch => {
    axios.get('/api/restaurant/getFoods')
         .then( res => {
             dispatch({
                type : GET_FOODS ,
                payload : res.data
            });
        })
         .catch(err => dispatch({
             type : GET_FOODS ,
             payload : null
         }));
}

export const getCart = () => dispatch => {
    axios.get('/api/orders/getCart')
        .then(res => dispatch({
            type : GET_CART ,
            payload : res.data
        }))
        .catch(err => console.log(err.response.data));
}

export const addToCart = (id) => dispatch => {
    axios.post(`/api/orders/addToCart/${id}`)
        .then(res => dispatch({
            type : ADD_TO_CART ,
            payload : id
        }))
        // .catch(err => console.log(err.response.data));
}

export const subQuantity = id => dispatch => {
    axios.delete(`/api/orders/subQuantity/${id}`)
        .then(res => dispatch({
            type:SUB_QUANTITY ,
            payload : id
        }))
        // .catch(err => console.log(err.response.data));
}

export const removeItem = id => dispatch => {
    axios.delete(`/api/orders/removeItem/${id}`)
        .then(res => dispatch({
            type:REMOVE_ITEM ,
            payload : id
        }))
        .catch(err => console.log(err.response.data));
}