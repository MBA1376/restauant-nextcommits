import axios from 'axios';
import { GET_FOODS , GET_ERRORS} from './types';

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