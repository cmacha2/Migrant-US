import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  comments: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsReducer: (state, action) => {
      state.posts = action.payload;
    },
    addPostReducer: (state, action) => {
      // The unshift() method adds one or more elements to the beginning of an array and returns the new length
      // of the array.
      state.posts = [action.payload, ...state.posts];
    },
    deletePostReducer: (state, action) => {
      const idPostToDelete = action.payload;
      // The filter() method creates a shallow copy of a portion of a given array,
      // filtered down to just the elements from the given array that pass the test
      // implemented by the provided function.
      state.posts = state.posts.filter((post) => post.id !== idPostToDelete); // create a new array with all posts except for the one that we want to delete
    },
    loadMorePostReducer: (state, action) => {
      // let arr1 = [0, 1, 2];
      // const arr2 = [3, 4, 5];

      // arr1 = [...arr2, ...arr1];
      // //  arr1 is now [3, 4, 5, 0, 1, 2]
      state.posts = [...state.posts, ...action.payload];
    },
    incrementLikesReducer: (state, action) => {
      const { userID, postID } = action.payload;
      // The map() method creates a new array populated with the results of calling a
      // provided function on every element in the calling array.
      state.posts = state.posts.map((post) => {
        if (post.id === postID) {
          post.numberOfLikes += 1;
          post.likedBy.push(userID);
        }
        return post;
      });
    },
    decrementLikesReducer: (state, action) => {
      const { userID, postID } = action.payload;
      state.posts = state.posts.map((post) => {
        if (post.id === postID) {
          post.numberOfLikes -= 1;
          post.likedBy = post.likedBy.filter((id) => id !== userID);
        }
        return post;
      });
    },
    updateCommentsReducer: (state, action) => {
      const { postID, comment } = action.payload;
      state.posts = state.posts.map((post) => {
        if (post.id === postID) {
          post.comments.items.push(comment);
        }
        return post;
      });
    },
    setCommentsReducer: (state, action) => {
      state.comments = action.payload;
    },
    updateCommentsReducer: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    deleteCommentReducer: (state, action) => {
      const commentID = action.payload;
      state.comments = state.comments.filter((comment) => comment.id !== commentID);
    }
  },
});

export const {
  setPostsReducer,
  addPostReducer,
  loadMorePostReducer,
  deletePostReducer,
  incrementLikesReducer,
  decrementLikesReducer,
  updateCommentsReducer,
  setCommentsReducer,
  deleteCommentReducer
} = postSlice.actions;

export default postSlice.reducer;