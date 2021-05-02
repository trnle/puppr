import { csrfFetch } from './csrf';

const LOAD_ALBUMS = 'albums/LOAD_ALBUMS';
const ADD_TO_ALBUM = 'albums/ADD_TO_ALBUM';

const load = albums => ({
  type: LOAD_ALBUMS,
  albums,
})

const addPhoto = album => ({
  type: ADD_TO_ALBUM,
  album
})


export const getUserAlbums = id => async dispatch => {
  const res = await csrfFetch(`/api/users/${id}/albums`);

  if (res.ok) {
    const albums = await res.json();
    dispatch(load(albums));
  }
}

export const addPhotoToAlbum = data => async dispatch => {
  const res = await csrfFetch(`/api/albums/${data.albumId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const album = await res.json();
    dispatch(addPhoto(album));
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
    case ADD_TO_ALBUM: {
      newState = { ...state }
      newState[action.album.albumId] = action.album;
      return newState;
    }
    default:
      return state;
  }
}

export default albumsReducer;