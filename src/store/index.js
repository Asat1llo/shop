import { configureStore} from "@reduxjs/toolkit";
import count from "./count";

export default configureStore({
    reducer:{
        count:count,
    }
})
