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

  if (!sessionUser || !photo) {
    return null;
  }

  if (sessionUser.id === photo.User.id) {
    return (
      <div className='photo-page-container'>
        <div className='single-photo-container'>
          <div id='single-photo'>
            <img src={photo.imgURL} alt={photo.title} width='40%' height='40%' />
          </div>
        </div>
        <div className='photo-details'>
          <h3 id='photo-title'>{photo.title}</h3>
          <p id='photo-caption'>{photo.caption}</p>
          <a id='photographer' href={`/profile/${photo.User.id}`}>by {photo.User.username}</a>
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
        <img src={photo.imgURL} alt={photo.title} width='40%' height='40%' />
      </div>
      <div className='photo-details'>
        <h3 id='photo-title'>{photo.title}</h3>
        <p id='photo-caption'>{photo.caption}</p>
        <a id='photographer' href={`/profile/${photo.User.id}`}>by {photo.User.username}</a>
      </div>
      <div>
        <Comments />
      </div>
    </div>
  )
}

export default Photo;