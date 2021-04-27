import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photos';

import './Explore.css'

function ExplorePage() {
  const sessionUser = useSelector(state => state.session.user);
  // const dispatch = useDispatch();
  // const {photoId} = useParams();
  // console.log(photoId);
  // const photos = useSelector(state => {
  //   return state.photos.map(photoId => state.photos[photoId]);
  // });

  // useEffect(() => {
  //   dispatch(getPhotos(photos));
  // }, [dispatch]);

  // if (!photos) {
  //   return null;
  // }

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <h3>test</h3>
  )
  // return (
  //   <div className='explore-gallery'>
  //     {photos.map(photo => {
  //       const {id, title, imgUrl} = photo;
  //       return (
  //         <div key={id} className='photo-container'>
  //           <img src={imgUrl} alt='' />
  //         </div>
  //       )
  //     })}
  //   </div>
  // )
}

export default ExplorePage;