import React, { useEffect } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import { Link } from 'react-router-dom';
import PlayButton from '../../components/PlayButton';
import MicPermission from './MicPermission';
import SpeechNotSupported from './SpeechNotSupported';

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
    return <SpeechNotSupported />;
  }

  if (!micPermissionGiven) {
    return <MicPermission />;
  }

  return (
    <Link to="/game">
      <PlayButton />
    </Link>
  );
};

export default NewGame;
