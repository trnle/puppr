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
  const photo = useSelector(state => state.photos[id]);
  const comments = useSelector(state => state.comments);

  useEffect(() => {
    dispatch(getOnePhoto(id));
    dispatch(getComments(id));
  }, [dispatch, id])

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  if (!sessionUser || !photo) {
    return null;
  }

  if (sessionUser.id === photo.User.id) {
    return (
      <div className='photo-page-container'>
        <div className='single-photo-container'>
          <img src={photo.imgURL} alt={photo.title} width='40%' height='40%' />
        </div>
        <div className='details-comments'>
          <div className='photo-details'>
            <a id='photographer' href={`/profile/${photo.User.id}`}>{photo.User.username}</a>
            <p id='photo-title'>{photo.title}</p>
            <p id='photo-caption'>{photo.caption}</p>
            <EditPhotoModal />
          </div>
          <div className='tags-container'>Tags Coming Soon</div>
          <Comments />
        </div>

      </div>
    )
  }

  return (
    <div className='photo-page-container'>
      <div className='single-photo-container'>
        <img src={photo.imgURL} alt={photo.title} width='40%' height='40%' />
      </div>
      <div className='details-comments'>
        <div className='photo-details'>
          <a id='photographer' href={`/profile/${photo.User.id}`}>{photo.User.username}</a>
          <button className='follow-btn'>Follow</button>
          <p id='photo-title'>{photo.title}</p>
          <p id='photo-caption'>{photo.caption}</p>
        </div>
        <div className='tags-container'>Tags Coming Soon</div>
        <Comments />
      </div>
    </div>
  )
}

export default Photo;