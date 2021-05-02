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
  const user = Object.values(userPhotos)[0]?.User;
  
  useEffect(() => {
    dispatch(getUserPhotos(id));
  }, [dispatch, id]);
  

  const navPhotostream = e => {
    e.preventDefault();
    history.push(`/profile/${id}`);
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
      <div className='user-info-container'>
        <div id='user-name-display'>
          <p>{user?.firstName} {user?.lastName}</p>
        </div>
        <div id='user-email-display'>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className='profile-nav'>
        <a href={`/profile`} onClick={navPhotostream}>Photostream</a>
        <a href={`/profile/${id}/albums`} onClick={navAlbums}>Albums</a>
      </div>
      <div className='grid-container'>
        {Object.values(userPhotos).map(photo => {
          return (
            <div key={photo.id} className='profile-photo-container'>
              <a href={`/photos/${photo.id}`} onClick={e => { e.preventDefault(); history.push(`/photos/${photo.id}`)}}>
                <img className='photo' src={photo.imgURL} alt={photo.title} />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Profile;