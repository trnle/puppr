import { csrfFetch } from './csrf';

const LOAD = 'photos/LOAD';


const load = list => ({
  type: LOAD,
  list,
})

export const getPhotos = photos => async dispatch => {
  const res = await csrfFetch(`/api/photos`);

  if (res.ok) {
    const list = await res.json();
    dispatch(load(list));
  }
}

const initialState = {
  list: [],
}

const photosReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD: {
      const allPhotos = {};
      action.list.forEach(photo => {
        allPhotos[photo.id] = photo;
      });
      return {
        ...allPhotos,
        ...state,
        list: action.list,
      };
    }
    default:
      return state;
  }
}

export default photosReducer;