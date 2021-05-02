import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { getUserAlbums, addPhotoToAlbum } from '../../store/albums';
import './AlbumPhoto.css';

function AlbumPhoto({ photo }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const userAlbums = useSelector(state => state.albums);
  const [addPhoto, setAddPhoto] = useState('');
  const [check, setCheck] = useState('+');

  useEffect(() => {
    dispatch(getUserAlbums(sessionUser.id));
  }, [dispatch, sessionUser.id]);

  const handleAddPhoto = async e => {
    e.preventDefault();
    setCheck('Added');
    const addedPhoto = {
      photoId: id,
      albumId: addPhoto
    }
    dispatch(addPhotoToAlbum(addedPhoto))
  }

  if (handleAddPhoto) {
    setTimeout(() => {
      setCheck('+');
    }, 3000);
  }

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div>
      <div className='album-dropdown'>
        <form onSubmit={handleAddPhoto}>
          <input type="hidden" value={photo.id} />
          <select id='dropdown-album-options' className="album" value={addPhoto} onChange={e => setAddPhoto(e.target.value)}>
            <option value="" disabled>Add to Album</option>
            {Object.values(userAlbums).map(album => {
              return (
                <option key={album.id} value={album.id}>{album.name}</option>
              )
            })}
          </select>
          <button id='add-photo-btn' type='submit'>{check}</button>
        </form>
      </div>
    </div>
  )
}

export default AlbumPhoto;