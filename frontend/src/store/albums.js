import { csrfFetch } from './csrf';

const LOAD_ALBUMS = 'photos/LOAD_ALBUMS';

const load = albums => ({
  type: LOAD_ALBUMS,
  albums,
})

export const getUserAlbums = id => async dispatch => {
  const res = await csrfFetch(`/api/users/${id}/albums`);

  if (res.ok) {
    const albums = await res.json();
    dispatch(load(albums));
  }
}

const albumsReducer = (state = {}, action) => {
  let newState = {};
  switch(action.type) {
    case LOAD_ALBUMS: {
      action.albums.forEach(album => {
        newState[album.id] = album;
      });
      return newState;
    }
    default:
      return state;
  }
}

export default albumsReducer;