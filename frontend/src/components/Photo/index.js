import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getOnePhoto } from '../../store/photos';
import EditPhotoModal from '../../context/EditPhotoModal'

import './Photo.css'

function Photo() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const photo = useSelector(state => state.photos)
  console.log("photo", photo[0])

  useEffect(() => {
    dispatch(getOnePhoto(id));
  }, [dispatch, id])

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  if (sessionUser.id === photo[7]?.id) {
    return (
      <div className='single-photo-container'>
        <img src={photo[3]} alt={photo[1]} width='40%' height='40%' />
        <div className='photo-details'>
          <h3>{photo[1]}</h3>
          <p>{photo[2]}</p>
          <a href={`/profile/${photo[4]}`}>by {photo[7]?.username}</a>
        </div>
        <EditPhotoModal />
      </div>
    )
  }

  return (
    <div className='single-photo-container'>
      <img src={photo[3]} alt={photo[1]} width='40%' height='40%'/>
        <div className='photo-details'>
          <h3>{photo[1]}</h3>
          <p>{photo[2]}</p>
          <a href={`/profile/${photo[4]}`}>by {photo[7]?.username}</a>
        </div>
    </div>
  )
}

export default Photo;