import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../post/postSlice";

const store = configureStore(
    {
        reducer:{
            post:  postReducer,
        }
    }
)

export default store;