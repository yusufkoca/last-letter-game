import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';

type GameResultProps = {
  winner?: string;
  lastWord: string;
  words: string[];
};

const GameResult = ({ winner = 'Computer', lastWord = '', words = [] }: GameResultProps) => {
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
      <Link to="/new-game">
        <CustomButton text="Play Again"></CustomButton>
      </Link>
    </div>
  );
};

export default GameResult;
