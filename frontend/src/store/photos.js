import { csrfFetch } from './csrf';

const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const LOAD_ONE_PHOTO = 'photos/LOAD_ONE_PHOTO';
const ADD_ONE_PHOTO = 'photos/ADD_ONE_PHOTO';
const UPDATE_PHOTO = '/photos/UPDATE_PHOTO';
const DELETE_PHOTO = '/photos/DELETE_PHOTO';

const load = photos => ({
  type: LOAD_PHOTOS,
  photos,
})

const loadOnePhoto = photo => ({
  type: LOAD_ONE_PHOTO,
  photo,
});

const addOnePhoto = photo => ({
  type: ADD_ONE_PHOTO,
  photo
})

const updatePhoto = photo => ({
  type: UPDATE_PHOTO,
  photo
})

const deletePhoto = photo => ({
  type: DELETE_PHOTO,
  photo
})

export const getPhotos = () => async dispatch => {
  const res = await csrfFetch('/api/photos');

  if (res.ok) {
    const photos = await res.json();
    dispatch(load(photos));
  }
}

export const getOnePhoto = id => async dispatch => {
  const res = await csrfFetch(`/api/photos/${id}`)
  if (res.ok) {
    const photo = await res.json();
    dispatch(loadOnePhoto(Object.values(photo)));
  }
}

export const uploadPhoto = data => async dispatch => {
  const res = await csrfFetch(`/api/photos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const photo = await res.json();
    dispatch(addOnePhoto(photo));
    return photo;
  }
}

export const updateUserPhoto = photo => async dispatch => {
  const res = await csrfFetch(`/api/photos/${photo[0]}`, {
    method: 'PUT',
    body: JSON.stringify(photo),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (res.ok) {
    const updatedPhoto = await res.json();
    dispatch(updatePhoto(updatedPhoto));
    return updatedPhoto;
  }
}

export const deleteUserPhoto = id => async dispatch => {
  const res = await csrfFetch(`/api/photos/${id}`, {
    method: 'DELETE',
  });
  const deletedPhoto = await res.json();
  console.log('delete', deletePhoto);
  dispatch(deletePhoto(deletedPhoto))
}

export const getUserPhotos = id => async dispatch => {
  const res = await csrfFetch(`/api/users/${id}`)
  if (res.ok) {
    const photos = await res.json();
    dispatch(load(Object.values(photos)));
  }
}

const photosReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_PHOTOS: {
      action.photos.forEach(photo => {
        newState[photo.id] = photo;
      });
      return newState;
    }
    case LOAD_ONE_PHOTO: {
      let id = 0;
      action.photo.forEach(data => {
        newState[id] = data;
        id++;
      })
      return newState
    }
    case ADD_ONE_PHOTO: {
      if (!state[action.photo.id]) {
        const newState = {
          ...state,
          [action.photo.id]: action.photo
        };
        const photoList = newState.map(id => newState[id]);
        photoList.push(action.photo);
        return newState;
      }
      return {
        ...state,
        [action.photo.id]: {
          ...state[action.photo.id],
          ...action.photo,
        }
      };
    }
    case UPDATE_PHOTO: {
      newState = {
        ...state,
        [action.photo.id]: action.photo
      }
      return newState;
    }
    case DELETE_PHOTO: {
      newState = { ...state }
      console.log("action", action.photo);
      delete newState[action.photo]
      return newState
    }
    default:
      return state;
  }
}

export default photosReducer;