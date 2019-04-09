import {GET_FOODS , ADD_TO_CART, GET_CART } from '../actions/types';

const initialState = {
    foods : [] ,
    addedItems : [] ,
    total : 0
};

export default function(state = initialState , action) {
    switch(action.type) {
        case GET_FOODS : 
            return {
                ...state ,
                foods : [...action.payload]
            }

        case ADD_TO_CART:
            
            let addedItem = state.foods.find(item=> item._id === action.payload)
            //check if the action id exists in the addedItems
            let existed_item= state.addedItems.find(item=> action.payload === item._id)
            if(existed_item) {
                addedItem.quantity += 1 
                return{
                    ...state,
                    total: state.total + addedItem.price 
                }
            }
            else{
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = state.total + addedItem.price 
                
                return{
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total : newTotal
                }
                
            }

        case GET_CART :
            const foods = action.payload.foods;
            const frequences = action.payload.frequenceTable;
            foods.forEach(item =>  item.quantity = frequences[item._id]);
            let totalPrice = 
            foods.reduce((acc, food) => acc+food.price*food.quantity, 0);

            
            return {
                ...state ,
                addedItems : foods ,
                total : totalPrice
            }

        default:
            return state;
    }
}