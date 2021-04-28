import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photos';

import './Explore.css'

function Explore() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const photos = useSelector(state => state.photos)

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  // if (!photos) {
  //   return null;
  // }

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div className='explore-gallery'>
      {Object.values(photos).map(photo => {
        return (
          <div key={photo.id} className='photo-container'>
            <a href={`/photos/${photo.id}`}>
              <img className='photo' src={photo.imgURL} alt={photo.title} />
              <p>{photo.title}</p>
              {/* <p>by {photo.User.username}</p> */}
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Explore;