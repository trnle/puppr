import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getOnePhoto } from '../../store/photos';

import './Photo.css'

function Photo() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const photo = useSelector(state => state.photos)
  console.log("photo object", photo)
  // console.log("array", photo[0])

  useEffect(() => {
    dispatch(getOnePhoto(id));
  }, [dispatch, id])

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
      <img src={photo[3]} alt={photo[1]} width='50%' height='50%' />
      <h3>{photo[1]}</h3>
      <a href={`/profile/${photo[4]}`}>by {photo[7].username}</a>
    </div>
  )
}

export default Photo;