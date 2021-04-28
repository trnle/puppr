import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getOnePhoto, updateUserPhoto } from '../../store/photos';

import './Photo.css'

function Photo() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const photo = useSelector(state => state.photos)
  
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');

  useEffect(() => {
    dispatch(getOnePhoto(id));
  }, [dispatch, id])

  const handleSubmit = async e => {
    e.preventDefault();
    const updatePhoto = {
      ...photo,
      title,
      caption
    }

    const updatedPhoto = await dispatch(updateUserPhoto(updatePhoto))
    if (updatedPhoto) {
  
    }
  }



  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  if (sessionUser.id === photo[7]?.id) {
    return (
      <div className='single-photo-container'>
        <img src={photo[3]} alt={photo[1]} width='40%' height='40%' />
        <div className='photo-details'>
          <h3>{photo[1]}</h3>
          <a href={`/profile/${photo[4]}`}>by {photo[7]?.username}</a>
        </div>
        <p>edit me</p>
      </div>
    )
  }

  return (
    <div className='single-photo-container'>
      <img src={photo[3]} alt={photo[1]} width='40%' height='40%'/>
        <div className='photo-details'>
          <h3>{photo[1]}</h3>
          <a href={`/profile/${photo[4]}`}>by {photo[7]?.username}</a>
        </div>
    </div>
  )
}

export default Photo;