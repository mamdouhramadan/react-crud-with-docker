import { initialModal } from "../../constants";
import { RESET_STATE, SET_MODAL } from "../actionTypes";

const modalReducer = (state = initialModal, action) => {
    switch (action.type) {
        case SET_MODAL:
            return { ...state, ...action.payload };
        case RESET_STATE:
            return { ...initialModal };
        default:
            return state;
    }
}
export default modalReducer;