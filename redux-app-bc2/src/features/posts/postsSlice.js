import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        title: 'Title 1',
        description: 'Description 1'
    },
    {
        id: 2,
        title: 'Title 2',
        description: 'Description 2'
    }
]


const postsSlice = createSlice( {
    name : 'posts',
    initialState,
    reducers : {}
} )

export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;