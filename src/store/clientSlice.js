import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name: 'items',
    initialState: {
        items: [
            { id: new Date().toDateString(), text: 'ndnfn'}, 
            { id: new Date().toDateString(), text: 'ndnfn'}
        ]
    },
    reducers: {
        //набор методов
        add( state, action) {
            console.log(state);
            console.log(action);

            state.items.push({
                id: new Date().toDateString(),
                text: action.payload.text
            })
        },
    }
})

export const {add} = clientSlice.actions;
export default clientSlice.reducer;