import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersService} from "../../services";

const initialState = {
    characters: []
}
const getAll = createAsyncThunk(
    'charactersSlice/getAll',
    async ({charId}, thunkAPI) => {
        try {
            const {data} = await charactersService.getCharactersById(charId);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.characters = action.payload
            })
})

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    ...actions,
    getAll
}

export {
    charactersReducer,
    charactersActions
}