import { configureStore} from "@reduxjs/toolkit";
import count from "./count";
import localSlice from "./localSlice";
import languageSlice from "./launguage"

export default configureStore({
    reducer:{
        count:count,
        local:localSlice,
        lang:languageSlice
    }
})
