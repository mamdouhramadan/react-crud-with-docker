import { ALL_USER, ADD_USER, VIEW_USER,UPDEATE_USER, DELETE_USER, RESET_STATE, SET_MODAL } from "./actionTypes";

// =====================
// User Actions
// =====================
export const allUserAction = (payload) => {
    return {
        type: ALL_USER,
        payload
    }
}

export const addUserAction = (payload) => {
    return {
        type: ADD_USER,
        payload
    }
}

export const viewUserAction = (payload) => {
    return {
        type: VIEW_USER,
        payload
    }
}



export const deleteUserAction = (payload) => {
    return {
        type: DELETE_USER,
        payload
    }
}

export const updateUserAction = (payload) => {
    return {
        type: UPDEATE_USER,
        payload
    }
}



// =====================
// Modal Actions
// =====================

export const modalAction = (payload) => {
    return {
        type: SET_MODAL,
        payload
    }
}


export const modalReset = () => {
    return {
        type: RESET_STATE,

    }
}