import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';
import { uploadPhoto } from '../../store/photos';

import './UploadPhotoModal.css';


function UploadPhotoModal({ user }) {
  const sessionUser = useSelector(state => state.session.user);
  // const {id} = useParams();
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
    const newPhoto = await dispatch(uploadPhoto(uploadedPhoto))
    setShowModal(false);
    history.push(`/photos/${newPhoto.id}`)
  }

  return (
    <div className='modal'>
      <button onClick={() => setShowModal(true)} id='upload-btn'>
        <i className="fas fa-cloud-upload-alt"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form className='upload-form-container' onSubmit={handleSubmit}>
            <h3>Upload Photo</h3>
            <input type="text" value={title} placeholder='Title' onChange={e => setTitle(e.target.value)} required />
            <input type="text" value={caption} placeholder='Caption' onChange={e => setCaption(e.target.value)} />
            <input type="text" value={imgURL} placeholder='Image URL' onChange={e => setImgURL(e.target.value)} required />
            <button id='submit-photo-btn' type='submit'>Submit</button>
            <button type='button' id='cancel-photo-btn' onClick={() => setShowModal(false)}>Cancel</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default UploadPhotoModal;