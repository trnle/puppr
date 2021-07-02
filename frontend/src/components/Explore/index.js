import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photos';

import './Explore.css'

function Explore() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  let photos = useSelector(state => state.photos);
  photos = Object.values(photos);
  // const [loadPhotos, setLoadPhotos] = useState(10);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  if (!photos) {
    return null;
  }

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div className='explore-gallery'>
      <div className='explore-grid-container'>
        {/* photos.slice(0, loadPhotos) */}
        {photos.map(photo => {
          return (
            <div key={photo.id} className='photo-container'>
              <a href={`/photos/${photo.id}`}
                onClick={e => {
                  e.preventDefault();
                  history.push(`/photos/${photo.id}`)
                }}>
                <div className='photo-box'>
                  <img className='photo' src={photo.imgURL} alt={photo.title} />
                  <div className='text-display'>
                    <p id='explore-photo-title'>{photo.title}</p>
                    <p id='explore-photo-user'>by {photo.User?.username}</p>
                  </div>
                </div>
              </a>
            </div>
          )
        })}
        {/* <div id='load-photos'>
          {photos.length > loadPhotos && (
            <button id='load-photos-btn' onClick={() => setLoadPhotos(loadPhotos + 10)}>Load More Photos</button>
          )}
        </div> */}
      </div>
    </div>
  )
}

export default Explore;