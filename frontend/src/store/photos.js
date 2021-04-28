import { csrfFetch } from './csrf';

const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const ADD_ONE_PHOTO = 'photos/ADD_ONE_PHOTO';
const LOAD_USER_PHOTOS = 'photos/LOAD_USER_PHOTOS';
// const ADD_ONE = 'photos/ADD_ONE';

const load = photos => ({
  type: LOAD_PHOTOS,
  photos,
})

const loadOnePhoto = photo => ({
  type: ADD_ONE_PHOTO,
  photo,
});

const loadUserPhotos = photos => ({
  type: LOAD_USER_PHOTOS,
  photos
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
    dispatch(loadOnePhoto(photo));
  }
}

export const getUserPhotos = id => async dispatch => {
  const res = await csrfFetch(`/api/users/${id}`)
  if (res.ok) {
    const photos = await res.json();
    dispatch(loadUserPhotos(photos));
  }
}

// const initialState = {
//   photos: {}
// }

const photosReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_PHOTOS: {
      action.photos.forEach(photo => {
        newState[photo.id] = photo;
      });
      return newState;
    }
    case ADD_ONE_PHOTO: {
     return {
       
     }
    }
    case LOAD_USER_PHOTOS: {
     return {

     }
    }
    default:
      return state;
  }
}

export default photosReducer;