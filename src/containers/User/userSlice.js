import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        token: "",
        user: ""
    },
    reducers:{

        login: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },

        logout: (state, action) => {
            return{
                ...state,
                token: "",
                user: ""

            }
        },
        
        signup: (state, action) => {
            return {
                ...state,
                isSigned: true,
                successMessage: 'You have signed succesfully'
            }
        }

    },
});

export const loginUser = (body) => async (dispatch) => {
    try{
        const user = await axios.post('http://127.0.0.1:3000/users/login',body);
        let decodeToken = jwt(user.data.token);
        
        if(user.status === 200){
            dispatch(login({
                ...decodeToken,
                token: user.data.token,
                user: user.data.user
            }))
        }

    }catch (error){
        console.log(error)
    }
};

export const logOut = () => (dispatch) => {
    dispatch(logout());
};

export const signupUser = (name, surname, phone, address, email, password) => async (dispatch) => {
    try {
        const user = await axios.post('http://127.0.0.1:8000/signup',
        {
            name: name,
            surname: surname,
            phone: phone,
            address: address,
            email: email,
            password: password
            
        })

        let response = user
        if(response.status === 200){
            dispatch(signup(response.data))
        } 
    } catch (error) {
        console.log(error)
    }
}

export const {login, logout, signup } = userSlice.actions
export const userSelector = (state) =>state.user
export default userSlice.reducer;