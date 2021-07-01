import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { getOnePhoto } from '../../store/photos';
import { getComments } from '../../store/comments';
import EditPhotoModal from '../../context/EditPhotoModal'
import AlbumPhoto from '../../components/AlbumPhoto';
import Comments from './Comments';

import './Photo.css'

function Photo() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const photo = useSelector(state => state.photos[id]);

  useEffect(() => {
    dispatch(getOnePhoto(id));
    dispatch(getComments(id));
  }, [dispatch, id])

  const navProfile = e => {
    e.preventDefault();
    history.push(`/profile/${photo.User?.id}`)
  }

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  if (!sessionUser || !photo) {
    return null;
  }

  return (
    <div className='photo-page-container'>
      <div className='single-photo-container'>
        <img src={photo.imgURL} alt={photo.title} />
      </div>
      <div className='details-comments'>
        <div className='photo-details'>
          {sessionUser.id === photo.User?.id && <EditPhotoModal />}
          <div className='user-follow'>
            <a id='photographer' href={`/profile/${photo.User?.id}`} onClick={navProfile}>{photo.User?.username}</a>
            {/* {sessionUser.id !== photo.User?.id && <button className='follow-btn'>Follow</button>} */}
          </div>
          <div className='title-album-container'>
            <p id='photo-title'>{photo.title}</p>
              <div className='album-add'>
                {sessionUser.id === photo.User?.id && <AlbumPhoto photo={photo} />}
              </div>
          </div>
          <div className='caption'>
            <p id='photo-caption'>{photo.caption}</p>
          </div>
          <hr/>
        </div>
        <div className='tags-container'>Tags Coming Soon</div>
        <Comments />
      </div>
    </div>
  )
}

export default Photo;