import { csrfFetch } from './csrf';

const LOAD_COMMENTS = 'photos/LOAD_COMMENTS';
const ADD_COMMENT = 'photos/ADD_COMMENT';
const UPDATE_COMMENT = '/photos/UPDATE_COMMENT';
// const DELETE_COMMENT = '/photos/DELETE_COMMENT';

const load = comments => ({
  type: LOAD_COMMENTS,
  comments
})

const addComment = comment => ({
  type: ADD_COMMENT,
  comment
})

const updateComment = comment => ({
  type: UPDATE_COMMENT,
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

export const createComment = id => async dispatch => {
  const res = await csrfFetch(`/api/comments/photos/${id}`, {
    method: 'POST',
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (res.ok) {
    const newComment = await res.json();
    dispatch(addComment(newComment));
  }
}

export const updateUserComment = data => async dispatch => {
  const res = await csrfFetch(`/api/comments/photos/${data.photoId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (res.ok) {
    const updatedComment = await res.json();
    dispatch(updateComment(updatedComment));
    return updatedComment;
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
    case ADD_COMMENT: {
      return newState;
    }
    case UPDATE_COMMENT: {
      newState = {
        ...state,
        [action.comment.id]: action.comment
      }
      return newState
    }
    default:
      return state;
  }
}

export default commentsReducer;