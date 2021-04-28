import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getOnePhoto } from '../../store/photos';

import './Photo.css'

function Photo() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const photo = useSelector(state => state.photos.photo)
  console.log("photo object", photo)
  // console.log("array", photo[0])

  useEffect(() => {
    dispatch(getOnePhoto(id));
  })

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

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div>
      {/* <img src={photo[0].imgURL} alt={photo[0].title} width='70%' height='70%' /> */}
    </div>
  )
}

export default Photo;