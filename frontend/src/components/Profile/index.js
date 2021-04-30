import React, { useEffect } from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPhotos } from '../../store/photos';
import './Profile.css'

function Profile() {
  const sessionUser = useSelector(state => state.session.user);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const userPhotos = useSelector(state => state.photos)


  useEffect(() => {
    dispatch(getUserPhotos(id));
  }, [dispatch, id]);

  const navPhotostream = e => {
    e.preventDefault();
    history.push(`/profile`);
  }

  const navAlbums = e => {
    e.preventDefault();
    history.push(`/profile/${id}/albums`);
  }


  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div className='profile-photostream'>
      <div>
        <h3>profile page</h3>
        <a href={`/profile`} onClick={navPhotostream}>Photostream</a>
        <a href={`/profile/${id}/albums`} onClick={navAlbums}>Albums</a>
      </div>
      <div className='user-photos'>
        {Object.values(userPhotos).map(photo => {
          return (
            <div key={photo.id} className='profile-photo-container'>
              <a className='photo' href={`/photos/${photo.id}`}>
                <img src={photo.imgURL} alt={photo.title} width='40%' height='40%' />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Profile;