import { createSlice } from "@reduxjs/toolkit";

const USER = 'user';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem(USER) ?? null
    },
    reducers: {

        setUser( state, action) {
            console.log(state);
            console.log(action);
            state.token = action.payload.token;
            //без localstorage после обновления страницы сбрасывается initialState и токен снова null
            localStorage.setItem( USER, action.payload.token )
        },
        removeUser(state) {
            state.token = null;
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;