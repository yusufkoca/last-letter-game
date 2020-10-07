import React, { useEffect } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import PlayButton from '../../components/PlayButton';

const NewGame = () => {
  const [micPermissionGiven, setMicPermissionGiven] = React.useState(false);

  useEffect(() => {
    navigator.permissions.query({ name: 'microphone' }).then((permissionStatus) => {
      if (permissionStatus.state === 'granted') {
        setMicPermissionGiven(true);
      } else {
        setMicPermissionGiven(false);
        SpeechRecognition.startListening({ language: 'tr' }); // to get mic permission before game begins
      }
      /* eslint no-param-reassign: "error" */
      permissionStatus.onchange = () => {
        if (permissionStatus.state === 'granted') {
          setMicPermissionGiven(true);
          SpeechRecognition.stopListening(); // stop listening because it is just used to get mic permission
        } else {
          setMicPermissionGiven(false);
        }
      };
    });
  }, []);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
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
          Speech Recognition feature is not supported for your browser. You may try to use another
          web browser or upgrade the current one.
        </p>
      </Modal>
    );
  }

  if (!micPermissionGiven) {
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
  }

  return (
    <Link to="/game">
      <PlayButton />
    </Link>
  );
};

export default NewGame;
