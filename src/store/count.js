import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const defaultValue = 1
const initialState = {
    value:1,
    valueproduct:0,
    status:'',
    data:[],
}

export const fetchData = createAsyncThunk(
    'count/fetchData',
    async ()=>{
        const res = await fetch('https://fakestoreapi.com/products')
        return res.json()
    }
)


const countSlice = createSlice({
    name:'count',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value += defaultValue
        },
        decrement:(state)=>{
          state.value == defaultValue ? state.value = defaultValue : state.value -= defaultValue
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.status = 'loading'
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.status = 'succsed'
            state.data.push(...action.payload)
        })
        builder.addCase(fetchData.rejected,(state)=>{
            state.status = 'error'
        })
    },
})

export const {increment,decrement} = countSlice.actions

export default countSlice.reducer