import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAlbums } from '../../store/albums';

import './Albums.css'

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
      {/* {Object.values(userAlbums).map(album => {
        <div key={album.id}>
          <img src={album[0].imgURL} alt=""/>
        </div>
      })} */}
    </div>
  )
}


export default Albums;