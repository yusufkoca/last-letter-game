import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useDebounce } from 'use-debounce';
import GameTable from './GameTable';

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
  }, [isActive, resetTranscript]);

  useEffect(() => {
    if (debouncedTranscript) {
      onChange(debouncedTranscript.toLowerCase());
    }
  }, [debouncedTranscript]);

  return <GameTable onCountDownEnd={onCountDownEnd} word={word} isActive={isActive} />;
};

export default Player;
