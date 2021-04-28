import { csrfFetch } from './csrf';

const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const ADD_ONE = 'photos/ADD_ONE'
// const ADD_ONE = 'photos/ADD_ONE';

const load = photos => ({
  type: LOAD_PHOTOS,
  photos,
})

const addOnePhoto = photo => ({
  type: ADD_ONE,
  photo,
});

// export const addOnePhoto = photo => ({
//   type: ADD_ONE,
//   photo,
// })

// const loadPhoto = photo => ({
//   type: LOAD_PHOTO,
//   photo
// })

export const getPhotos = () => async dispatch => {
  const res = await csrfFetch('/api/photos');

  if (res.ok) {
    const photos = await res.json();
    dispatch(load(photos));
  }
}

export const getPhoto = id => async dispatch => {
  const res = await csrfFetch(`/api/users/photos/${id}`)
  if (res.ok) {
    const photo = await res.json();
    dispatch(addOnePhoto(photo));
  }
}

// export const getOnePhoto = id => async dispatch => {
//   const res = await csrfFetch(`/api/photos/${id}`);

//   if (res.ok) {
//     const photo = await res.json();
//     dispatch(addOnePhoto(photo))
//   }
// }

// export const getUserPhotos = (id) => async dispatch => {
//   const res = await csrfFetch(`/api/users/${id}`);
//   const data = await res.json();
//   dispatch(load(data));
// }

const initialState = {
  photos: [],
}

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHOTOS: {
      const allPhotos = {};
      action.photos.forEach(photo => {
        allPhotos[photo.id] = photo;
      });
      return {
        ...allPhotos,
        ...state,
        photos: action.photos
      };
    }
    case ADD_ONE: {
      if (!state[action.photo.id]) {
        const newState = {
          ...state,
          [action.photo.id]: action.photo
        };
        const photoList = newState.photos.map(id => newState[id]);
        photoList.push(action.photo);
        newState.photos = photoList;
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
    default:
      return state;
  }
}

export default photosReducer;