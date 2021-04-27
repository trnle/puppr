import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getPhotos } from '../../store/photos';

import './Photo.css'

function Photo() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const photos = useSelector(state => state.photos.photos)
  // console.log(photos);
  const currentPhoto = photos[id - 1];
  console.log(currentPhoto);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div>
      {/* <img src={currentPhoto.imgURL} alt={currentPhoto.title} width='20%' height='20%' /> */}
    </div>
  )
}

export default Photo;