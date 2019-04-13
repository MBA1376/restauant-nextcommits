import {GET_FOODS , ADD_TO_CART, GET_CART , SUB_QUANTITY ,REMOVE_ITEM} from '../actions/types';

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

        case SUB_QUANTITY :
            let _addedItem = state.foods.find(item=> item._id === action.payload) 
            //if the qt == 0 then it should be removed
            if(_addedItem.quantity === 1){
                let new_items = state.addedItems.filter(item=>item._id !== action.payload)
                let newTotal = state.total - _addedItem.price;
                return{
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            }
            else {
                _addedItem.quantity -= 1
                let newTotal = state.total - _addedItem.price
                return{
                    ...state,
                    total: newTotal
                }
            }

        case REMOVE_ITEM:
            let itemToRemove= state.addedItems.find(item=> action.payload === item._id)
            let new_items = state.addedItems.filter(item=> action.payload !== item._id)
            
            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
            console.log(itemToRemove)
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
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