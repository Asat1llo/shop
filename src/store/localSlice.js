import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    data:[],
    status:'',
    ref:false,
}

export const fetchLocal = createAsyncThunk(
    'local/fetchLocal',
    async()=>{
       if(localStorage.getItem('data')==null){
            localStorage.setItem('data','[]') 
        }
       const localData = JSON.parse(localStorage.getItem('data'))
       return localData
    }
)

const localSlice = createSlice({
    name:'local',
    initialState,
    reducers:{
        addStoreg:(state,action)=>{
        const oldata = JSON.parse(localStorage.getItem('data'))
        oldata.push(action.payload)
        localStorage.setItem('data',JSON.stringify(oldata))
        state.ref = true
        
        },
        remove:(state,action)=>{
         state.data = state.data.filter(item =>item.id !== action.payload)
         localStorage.setItem('data',JSON.stringify(state.data))
        },
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

export const {remove,addStoreg} = localSlice.actions
export default localSlice.reducer