import React from 'react';
import Modal from 'react-modal';

const SpeechNotSupported = () => {
  return (
    <Modal
      isOpen
      contentLabel="Not supported"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          padding: 32,
        },
      }}
    >
      <p>
        Speech Recognition feature is not supported for your browser. You may try to use another web
        browser or upgrade the current one.
      </p>
    </Modal>
  );
};

export default SpeechNotSupported;
