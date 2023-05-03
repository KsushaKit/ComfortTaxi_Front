import { createSlice } from "@reduxjs/toolkit";

const SEARCH_ITEM = 'SEARCH_ITEM'
const ITEM_DATA = '{"item1":0,"item2":"firstname","item3":"secondname","item4":"patronymic","item5":"phone_number","item6":"email","item7":"address"}';
const ITEM = 'ITEM';

const defaultSlice = createSlice({
    name: 'default',
    initialState: {
        item: JSON.parse(localStorage.getItem(ITEM) ?? ITEM_DATA),
        searchItem: JSON.parse(localStorage.getItem(SEARCH_ITEM) ?? ITEM_DATA)
    },
    reducers: {

        addSearchItem(state, action) {
            let item = action.payload;
            console.log(` addSearchItem defaultSlice ${JSON.stringify(action.payload)}`);
            state.searchItem = item;
            localStorage.setItem(SEARCH_ITEM, JSON.stringify(action.payload));
        },
        addItem(state, action) {
            let item = action.payload;
            console.log(` addItem defaultSlice ${JSON.stringify(action.payload)}`);
            state.item = item;
            localStorage.setItem(ITEM, JSON.stringify(action.payload));
        }
       
    }
})

export const { addSearchItem, addItem } = defaultSlice.actions;
export default defaultSlice.reducer;