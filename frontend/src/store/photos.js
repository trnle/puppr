import { csrfFetch } from './csrf';

const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';

const load = photos => ({
  type: LOAD_PHOTOS,
  photos,
})


export const getPhotos = () => async dispatch => {
  const res = await csrfFetch(`/api/photos`);

  if (res.ok) {
    const photos = await res.json();
    dispatch(load(photos));
  }
}

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
    default:
      return state;
  }
}

export default photosReducer;