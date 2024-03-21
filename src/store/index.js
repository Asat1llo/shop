import { configureStore} from "@reduxjs/toolkit";
import count from "./count";
import localSlice from "./localSlice";

export default configureStore({
    reducer:{
        count:count,
        local:localSlice
    }
})
