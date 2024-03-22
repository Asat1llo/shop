import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    data:[],
    status:'',
    refresh:false,
}

export const fetchLocal = createAsyncThunk(
    'local/fetchLocal',
    async()=>{
       const localData = JSON.parse(localStorage.getItem('data'))
       return localData
    }
)

const localSlice = createSlice({
    name:'local',
    initialState,
    reducers:{
        refresh:(state,action)=>{
            state.refresh = action.payload
        }
    },
    extraReducers:(builder)=>{
     builder.addCase(fetchLocal.pending,(state)=>{
        state.status = 'loading'
     })
     builder.addCase(fetchLocal.fulfilled,(state,action)=>{
        state.status = 'succsed'
        state.data.push(...action.payload)
     })
     builder.addCase(fetchLocal.rejected,(state)=>{
        state.status = 'error'
     })
    }
})

export const {refresh} = localSlice.actions
export default localSlice.reducer