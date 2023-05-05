import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export type PostType ={
    userId: string,
    id: number,
    title: string,
    body: string,
}

export type SlicePostType={
    error: null|string,
    posts: PostType[],
    isLoading: boolean,
}


export const fetchPosts  = createAsyncThunk<PostType[]>(
    "posts/",
    async () => {
      const response =   await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data
    }
    
)

const postSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading: false,
        posts: [] ,
        error: null ,
    } as SlicePostType,

    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, state=>{
            state.isLoading = true;
        });

        builder.addCase(fetchPosts.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.posts = [...state.posts, ...action.payload];
        });

        builder.addCase(fetchPosts.rejected, (state, action)=>{
            state.isLoading = true;
            state.error = action.error.message as string;
        })
    },
    reducers: {}
})

export default postSlice.reducer;


