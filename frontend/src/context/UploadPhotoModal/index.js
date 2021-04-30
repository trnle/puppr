import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from 'react-router-dom';
import { uploadPhoto } from '../../store/photos';

import './UploadPhotoModal.css';


function UploadPhotoModal({ user }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [imgURL, setImgURL] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const uploadedPhoto = {
      title,
      caption,
      imgURL,
      userId: sessionUser.id
    }

    dispatch(uploadPhoto(uploadedPhoto))
    console.log('uploaded', uploadedPhoto);
    setShowModal(false);
    history.push(`/photos/${uploadedPhoto.id}`)
  }

  return (
    <div className='modal'>
      <button onClick={() => setShowModal(true)} id='upload-btn'>
        <i className="fas fa-cloud-upload-alt"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <h3>Upload Photo</h3>
            <input type="text" value={title} placeholder='Title' onChange={e => setTitle(e.target.value)} required />
            <input type="text" value={caption} placeholder='Caption' onChange={e => setCaption(e.target.value)} />
            <input type="text" value={imgURL} placeholder='Image URL' onChange={e => setImgURL(e.target.value)} required />
            <button type='submit'>Submit</button>
          </form>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </Modal>
      )}
    </div>
  );
}

export default UploadPhotoModal;