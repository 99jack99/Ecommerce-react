import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({

    name: 'product',
    initialState: {
        id: "",
        name: "",
        description: "",
        size: "",
        sex: "",
        price: "",
        stock: ""
    },

    reducers: {

        id: (state, action) => {
            state.id = action.payload
            state.name = action.payload
        },

        /* delete: (state, action) => {
            return {
                ...state,
                successMessage: 'You have deleted succesfully'
            }
        } */
    },
});

export const idProduct = (event) => async (dispatch) => {
    try {
        dispatch(id({
            id: event.id,
            name: event.name
        }))

    } catch (error) {
        console.log(error)
    }
}


export const { id } = adminSlice.actions
export const selectProduct = (state) => state.product
export default adminSlice.reducer;