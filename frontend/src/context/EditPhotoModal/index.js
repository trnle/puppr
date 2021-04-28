import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPhotoForm from './EditPhotoForm';
import { useDispatch, useSelector } from "react-redux";
import { updateUserPhoto } from '../../store/photos';

function EditPhotoModal() {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const photo = useSelector(state => state.photos)

  const [title, setTitle] = useState(photo[1]);
  const [caption, setCaption] = useState(photo[2]);

  console.log("title", photo[1]);


  const handleSubmit = async e => {
    const updatePhoto = {
      ...photo,
      title,
      caption
    }
    return await dispatch(updateUserPhoto(updatePhoto))
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
              <button type='submit'>Submit</button>
              {/* <button type='submit'>Delete</button> */}
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default EditPhotoModal;