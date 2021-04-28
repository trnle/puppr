import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getPhoto } from '../../store/photos';

import './Photo.css'

function Photo() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const photo = useSelector(state => state.photos.photos);
  console.log("test", photo);
  
  useEffect(() => {
    dispatch(getPhoto(id));
  })
  // const photos = useSelector(state => state.photos.photos)
  // console.log(photos);
  // const currentPhoto = photos[id - 1];
  // let imgURL;
  // let title;
  // for (let key in currentPhoto) {
  //   if (key === 'imgURL') {
  //     imgURL = currentPhoto[key];
  //   }
  //   if (key === 'title') {
  //     title = currentPhoto[title];
  //   }
  // }

  // useEffect(() => {
  //   dispatch(getPhotos());
  // }, [dispatch]);

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div>
      {/* <img src={imgURL} alt={title} width='70%' height='70%' /> */}
    </div>
  )
}

export default Photo;