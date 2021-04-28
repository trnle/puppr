import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPhotoForm from './EditPhotoForm';

function EditPhotoModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='modal'>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPhotoForm />
        </Modal>
      )}
    </div>
  );
}

export default EditPhotoModal;