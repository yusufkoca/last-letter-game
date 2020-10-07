import React from 'react';
import CustomButton from '../../components/CustomButton';

type GameResultProps = {
  winner?: string;
  lastWord: string;
  words: string[];
  onReplay: () => void;
};

const GameResult = ({
  winner = 'Computer',
  lastWord = '',
  words = [],
  onReplay,
}: GameResultProps) => {
  return (
    <div>
      <h1>Winner: {winner}</h1>
      <h2>Last Word: {lastWord}</h2>
      <h2>Total Words: {words.length}</h2>
      <p>
        {words.map((word, index) => (
          <span key={word}>
            {word} {index < words.length - 1 ? '->' : ''}
          </span>
        ))}
      </p>
      <CustomButton text="Play Again" onClick={() => onReplay()} />
    </div>
  );
};

export default GameResult;
