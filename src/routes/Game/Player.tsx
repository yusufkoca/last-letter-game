import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useDebounce } from 'use-debounce';
import Countdown from '../../components/Countdown';

type PlayerProps = {
  isActive: boolean;
  onChange: (name: string) => void;
  word: string;
  onCountDownEnd: () => void;
};

const Player = ({ isActive, onChange, word, onCountDownEnd }: PlayerProps) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [debouncedTranscript] = useDebounce(transcript, 1000);

  useEffect(() => {
    if (isActive) {
      SpeechRecognition.startListening({ language: 'tr' });
    } else {
      SpeechRecognition.stopListening();
      resetTranscript();
    }
  }, [isActive]);

  useEffect(() => {
    if (debouncedTranscript) {
      onChange(debouncedTranscript.toLowerCase());
    }
  }, [debouncedTranscript]);

  return (
    <div className={isActive ? 'active' : 'passive'}>
      <h1>{isActive ? 'Your turn' : "Computer's turn"}</h1>
      <br />
      {isActive ? <Countdown onEnd={onCountDownEnd} /> : null}
      <h2>{!isActive ? word : ''}</h2>
    </div>
  );
};

export default Player;
