import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPhotos } from '../../store/photos';
import './Profile.css'

function Profile() {
  const sessionUser = useSelector(state => state.session.user);
  const { id } = useParams();
  const dispatch = useDispatch();

  const photos = useSelector(state => state.photo)
  console.log("test 1", photos);

  useEffect(() => {
    dispatch(getUserPhotos(id));
  }, [dispatch, id]);

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div className='profile-photostream'>
      <h3>profile page</h3>

      {/* {Object.values(photos).map(photo => {
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