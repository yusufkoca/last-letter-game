import React from 'react';
import Countdown from '../../components/Countdown';

type GameTableProps = {
  isActive: boolean;
  word: string;
  onCountDownEnd: () => void;
};

const GameTable = ({ isActive, onCountDownEnd, word }: GameTableProps) => {
  return (
    <div className={isActive ? 'active' : 'passive'}>
      <h1>{isActive ? "Computer's turn" : "Player's turn"}</h1>
      <br />
      {isActive ? <Countdown onEnd={onCountDownEnd} /> : null}
      <h2>{!isActive ? word : ''}</h2>
    </div>
  );
};

export default GameTable;
