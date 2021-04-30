import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAlbums } from '../../store/albums';

import './Album.css'

function Albums() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const userAlbums = useSelector(state => state.albums);
  console.log('albums', userAlbums);

  useEffect(() => {
    dispatch(getUserAlbums(id));
  }, [dispatch]);

  return (
    <div>
      <div>
        <h3>Album page</h3>
        <a href={`/profile/${sessionUser.id}`}>Photostream</a>
        <a href={`/profile/${sessionUser.id}/albums`}>Albums</a>
      </div>
      {Object.values(userAlbums).map(album => {
        return (
          <div key={album.id}>
            {console.log('testing album',album)}
            {album.Photos.map(photo => {
              return(
                <div key={photo.id}>
                  <img src={photo.imgURL} alt="" width='40%' height='40%'/>
                </div>
              )
            })}
           
          </div>
        )
      })}
    </div>
  )
}


export default Albums;