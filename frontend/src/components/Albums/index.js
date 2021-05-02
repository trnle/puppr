import React, { useEffect } from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAlbums } from '../../store/albums';
import Footer from '../Footer';

import './Albums.css'

function Albums() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const userAlbums = useSelector(state => state.albums);
  const user = Object.values(userAlbums)[0]?.User;

  useEffect(() => {
    dispatch(getUserAlbums(id));
  }, [dispatch, id]);

  const navPhotostream = e => {
    e.preventDefault();
    history.push(`/profile/${id}`);
  }

  const navAlbums = e => {
    e.preventDefault();
    history.push(`/profile/${id}/albums`);
  }

  if(!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div className='profile-album'>
      <div className='user-info-container'>
        <div id='user-name-display'>
          <p>{user?.firstName} {user?.lastName}</p>
        </div>
        <div id='user-email-display'>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className='nav-profile-album'>
        <a href={`/profile/${id}`} onClick={navPhotostream} >Photostream</a>
        <a href={`/profile/${id}/albums`} onClick={navAlbums}>Albums</a>
      </div>
      {Object.values(userAlbums).map(album => {
        return (
          <div key={album.id} className='album-photo-container'>
            <div className='album-info'>
              <p id='album-title'>
                {album.name}
                <p id='album-description'>{album.description}</p>
              </p>
            </div>
            {album.Photos.map(photo => {
              return (
                <div key={photo.id} className='alb-photo'>
                  <a href={`/photos/${photo.id}`}>
                    <div className='photo-box'>
                      <img className='photo' src={photo.imgURL} alt={photo.title} />
                      <div className='text-display'>
                        <p id='explore-photo-title-1'>{photo.title}</p>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        )
      })}
      <Footer />
    </div>
  )
}

export default Albums;


// import React, { useEffect } from 'react';
// import { Redirect, useParams, useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserAlbums } from '../../store/albums';

// import './Albums.css'

// function Albums() {
//   const sessionUser = useSelector(state => state.session.user);
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const { id } = useParams();
//   const userAlbums = useSelector(state => state.albums);
//   console.log('albums', userAlbums);

//   useEffect(() => {
//     dispatch(getUserAlbums(id));
//   }, [dispatch, id]);

//   const navPhotostream = e => {
//     e.preventDefault();
//     history.push(`/profile/${id}`);
//   }

//   const navAlbums = e => {
//     e.preventDefault();
//     history.push(`/profile/${id}/albums`);
//   }

//   if (!sessionUser) {
//     return(
//       <Redirect to='/login' />
//     )
//   }

//   return (
//     <div className='profile-albums'>
//       <div className='profile-nav'>
//         <h3>Album page</h3>
//         <a href={`/profile/${id}`} onClick={navPhotostream}>Photostream</a>
//         <a href={`/profile/${id}/albums`} onClick={navAlbums}>Albums</a>
//       </div>
//       <div className='album-grid-container'>
//         {Object.values(userAlbums).map(album => {
//           return (
//             <div key={album.id} className='albums-container'>
//               <a href={`/profile/${album.userId}/albums/${album.id}`}>
//                 <img className='album-cover' src={album.Photos[0].imgURL} alt={album.name} />
//               </a>
//               {/* {console.log(album.Photos[0].imgURL)} */}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }


// export default Albums;
