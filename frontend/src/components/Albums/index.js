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
  }, [dispatch, id]);

  if (!sessionUser) {
    return(
      <Redirect to='/login' />
    )
  }
  
  return (
    <div>
      <div>
        <h3>Album page</h3>
        <a href={`/profile/${id}`}>Photostream</a>
        <a href={`/profile/${id}/albums`}>Albums</a>
      </div>
      {Object.values(userAlbums).map(album => {
        return(
          <div key={album.id}>
            <a href={`/profile/${album.userId}/albums/${album.id}`}>
              <img src={album.Photos[0].imgURL} alt={album.name} width='40%' height='40%'/>
            </a>
            {/* {console.log(album.Photos[0].imgURL)} */}
            
          </div>
        )
      })}
    </div>
  )
}


export default Albums;