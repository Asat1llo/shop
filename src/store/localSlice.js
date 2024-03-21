import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    data:[],
    status:'',
    removed:'',
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
        removelocal:(state,action)=>{
         state.removed = state.data.filter(item=>item.id !== action.payload)
         localStorage.setItem(JSON.stringify(state.removed))
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

export const {removelocal} = localSlice.actions
export default localSlice.reducer