import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from "react-redux";
import { addUserAlbum } from '../../store/albums';

import './CreateAlbumModal.css';


function CreateAlbumModal({ user }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [albumName, setAlbumName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const newAlbum = {
      name: albumName,
      description,
      userId: user.id
    }
    dispatch(addUserAlbum(newAlbum));
    setShowModal(false);
    setAlbumName('');
    setDescription('');
  }

  return (
    <div className='modal'>
      <button onClick={() => setShowModal(true)} id='create-alb-btn'>
        + New Album
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form className='upload-form-container' onSubmit={handleSubmit}>
            <h3>Create Album</h3>
            <input type="text" value={albumName} placeholder='Title' onChange={e => setAlbumName(e.target.value)} required />
            <input type="text" value={description} placeholder='Description' onChange={e => setDescription(e.target.value)} />
            <button id='save-album-btn' type='submit'>Save</button>
            <button type='button' id='cancel-album-btn' onClick={() => setShowModal(false)}>Cancel</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default CreateAlbumModal;