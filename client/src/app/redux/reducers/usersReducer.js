import { ALL_USER,ADD_USER, DELETE_USER, UPDEATE_USER, VIEW_USER } from "../actionTypes";

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case ALL_USER:
            return action.payload;
        case VIEW_USER:
            return state;
        case ADD_USER:
            return [...state, action.payload];
        case UPDEATE_USER:
            return state.map(user => user._id === action.payload._id ? action.payload : user);
        case DELETE_USER:            
            return state.filter(user => user._id !== action.payload);
        default:
            return state;
    }
}
export default usersReducer;