import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';

import { updateUserPhoto, deleteUserPhoto } from '../../store/photos';
import './EditPhotoModal.css';

function EditPhotoModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const {id} = useParams();

  const history = useHistory();
  const photo = useSelector(state => state.photos[id])

  const [title, setTitle] = useState(photo.title);
  const [caption, setCaption] = useState(photo.caption || '');
  
  const handleSubmit = async e => {
    e.preventDefault();
    const updatePhoto = {
      ...photo,
      title,
      caption
    }
    dispatch(updateUserPhoto(updatePhoto))
    setShowModal(false);
  }

  const handleDelete = async e => {
    e.preventDefault();
    dispatch(deleteUserPhoto(photo.id))
    history.push(`/profile/${photo.User.id}`);
  }


  return (
    <div className='modal'>
      <button id='edit-btn' onClick={() => setShowModal(true)}>Edit Photo</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* <EditPhotoForm /> */}
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <h3>Edit Photo</h3>
              <input type="text" value={title} placeholder='Title' onChange={e => setTitle(e.target.value)} required />
              <input type="text" value={caption} placeholder='Caption' onChange={e => setCaption(e.target.value)} />
              <button className='save-info-btn' type='submit'>Save</button>
              <button className="fas fa-trash delete-photo-btn" onClick={handleDelete}></button>
            </form>
            <button className='cancel-change-btn' onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default EditPhotoModal;