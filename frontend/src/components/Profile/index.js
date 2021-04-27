import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPhotos } from '../../store/photos';
import './Profile.css'

function Profile() {
  const sessionUser = useSelector(state => state.session.user);
  // const id = sessionUser.id;
  const dispatch = useDispatch();

  // const photos = useSelector(state => state.photos)
  // console.log(photos);

  // useEffect(() => {
  //   dispatch(getUserPhotos());
  // }, [dispatch]);

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div className='profile-photostream'>
      <h3>profile page</h3>

      {/* {photos.map(photo => {
        return (
          <div key={photo.id} className='photo-container'>
            <img src={photo.imgURL} alt={photo.title} width='20%' height='20%' />
          </div>
        )
      })} */}
    </div>
  )
}

export default Profile;