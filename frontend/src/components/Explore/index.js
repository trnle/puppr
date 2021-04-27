import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photos';

import './Explore.css'

function Explore() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const photos = useSelector(state => state.photos.photos)

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
      {photos.map(photo => {
        return (
          <div key={photo.id} className='photo-container'>
            <a href={`/photos/${photo.id}`}>
              <img src={photo.imgURL} alt={photo.title} width='20%' height='20%'/>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Explore;