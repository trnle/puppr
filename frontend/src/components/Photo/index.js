import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getOnePhoto } from '../../store/photos';
import { getComments } from '../../store/comments';
import EditPhotoModal from '../../context/EditPhotoModal'
import Comments from './Comments';

import './Photo.css'

function Photo() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const photo = useSelector(state => state.photos);
  const comments = useSelector(state => state.comments);
  console.log('test', comments);
  useEffect(() => {
    dispatch(getOnePhoto(id));
    dispatch(getComments(id));
  }, [dispatch, id])

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  if (sessionUser.id === photo[7]?.id) {
    return (
      <div className='photo-page-container'>
        <div className='single-photo-container'>
          <img src={photo[3]} alt={photo[1]} width='40%' height='40%' />
          <div className='photo-details'>
            <h3>{photo[1]}</h3>
            <p>{photo[2]}</p>
            <a href={`/profile/${photo[4]}`}>by {photo[7]?.username}</a>
          </div>
        </div>
        <EditPhotoModal />
        <div>
          <Comments />
        </div>
      </div>
    )
  }

  return (
    <div className='photo-page-container'>
      <div className='single-photo-container'>
        <img src={photo[3]} alt={photo[1]} width='40%' height='40%' />
        <div className='photo-details'>
          <h3>{photo[1]}</h3>
          <p>{photo[2]}</p>
          <a href={`/profile/${photo[4]}`}>by {photo[7]?.username}</a>
        </div>
        <div>
          <Comments />
        </div>
      </div>
    </div>
  )
}

export default Photo;