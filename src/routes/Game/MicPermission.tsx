import React from 'react';
import Modal from 'react-modal';

const MicPermission = () => {
  return (
    <Modal
      isOpen
      contentLabel="Mic Permission"
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
      <p>This game requires mic usage. Please give permission to continue.</p>
      <p>
        For more info{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://support.google.com/chrome/answer/2693767?co=GENIE.Platform%3DDesktop&hl=en&oco=0"
        >
          click here
        </a>
      </p>
    </Modal>
  );
};

export default MicPermission;
