import React, { useEffect } from 'react';
import Countdown from '../../components/Countdown';
import pickAName from '../../utils/pickAName';
import pickANameBeginningWith from '../../utils/pickANameBeginningWith';

type ComputerProps = {
  isActive: boolean;
  onChange: (name: string) => void;
  word: string;
  onCountDownEnd: () => void;
};

const Computer = ({ isActive, onChange, word, onCountDownEnd }: ComputerProps) => {
  const utterance = React.useMemo(() => new SpeechSynthesisUtterance(), []);
  utterance.lang = 'tr-TR';
  useEffect(() => {
    if (isActive) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber < 8) {
        const newName =
          word === '' ? pickAName() : pickANameBeginningWith(word.charAt(word.length - 1));
        setTimeout(() => {
          onChange(newName);
          utterance.text = newName;
          speechSynthesis.speak(utterance);
        }, randomNumber * 1000);
      }
    }
  }, [isActive]);

  return (
    <div className={isActive ? 'active' : 'passive'}>
      <h1>{isActive ? "Computer's turn" : "Player's turn"}</h1>
      <br />
      {isActive ? <Countdown onEnd={onCountDownEnd} /> : null}
      <h2>{!isActive ? word : ''}</h2>
    </div>
  );
};

export default Computer;
