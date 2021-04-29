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
  const photo = useSelector(state => state.photos)

  const [title, setTitle] = useState(photo[1]);
  const [caption, setCaption] = useState(photo[2]);

  console.log('photo details', photo);


  const handleSubmit = async e => {
    const updatePhoto = {
      ...photo,
      title,
      caption
    }
    await dispatch(updateUserPhoto(updatePhoto))
  }

  const handleDelete = async e => {
    // e.preventDefault();
    await dispatch(deleteUserPhoto(id))
    history.push(`/profile/${photo[4]}`);
  }


  return (
    <div className='modal'>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* <EditPhotoForm /> */}
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <h3>Edit Photo</h3>
              <input type="text" value={title} placeholder='Title' onChange={e => setTitle(e.target.value)} required />
              <input type="text" value={caption} placeholder='Caption' onChange={e => setCaption(e.target.value)} />
              <button type='submit'>Save</button>
              <button onClick={handleDelete}>Delete</button>
            </form>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default EditPhotoModal;