import { csrfFetch } from './csrf';

const LOAD_COMMENTS = 'photos/LOAD_COMMENTS';
const ADD_COMMENT = 'photos/ADD_COMMENT';
const UPDATE_COMMENT = '/photos/UPDATE_COMMENT';
const DELETE_COMMENT = '/photos/DELETE_COMMENT';

const load = comments => ({
  type: LOAD_COMMENTS,
  comments
})

const addComment = comment => ({
  type: ADD_COMMENT,
  comment
})

export const getComments = id => async dispatch => {
  const res = await csrfFetch(`/api/comments/photos/${id}`);
  if (res.ok) {
    const comments = await res.json();
    console.log('comments', comments);
    dispatch(load(comments));
  }
}

const commentsReducer = (state = {}, action) => {
  let newState = {};
  switch(action.type) {
    case LOAD_COMMENTS: {
      action.comments.forEach(comment => {
        newState[comment.id] = comment;
      })
      return newState
    }
    default:
      return state;
  }
}

export default commentsReducer;