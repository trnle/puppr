import { csrfFetch } from './csrf';

const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const LOAD_ONE_PHOTO = 'photos/LOAD_ONE_PHOTO';
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
  }
}

export const deleteUserPhoto = photo => async dispatch => {
  const res = await csrfFetch(`/api/photos/${photo[0]}`, {
    method: 'DELETE',
  })

  dispatch(deletePhoto(photo))
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
    case UPDATE_PHOTO: {
      newState = {
        ...state,
        [action.photo.id]: action.photo
      }
      console.log(newState);
      return newState;
    }
    case DELETE_PHOTO: {
      newState = { ...state }
      delete newState[action.photo]
      return newState
    }
    default:
      return state;
  }
}

export default photosReducer;