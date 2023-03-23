import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'items',
    initialState: {
        items: []
    },
    reducers: {
        //набор методов
        add( state, action) {
            console.log(state);
            console.log(action);

            state.items.push({
                id: new Date().toDateString(),
                text: 'ndnfn'
            })
        }
    }
})

export const {add} = userSlice.actions;
export default userSlice.reducer;