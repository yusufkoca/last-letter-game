import React from 'react';
import Modal from 'react-modal';
import GameResult from './GameResult';
import './Game.scss';
import Player from './Player';
import Computer from './Computer';
import ErrorBoundary from '../../components/ErrorBoundary';
import isValidNewWord from '../../utils/isValidNewWord';

const Game = () => {
  const [gameOver, setGameOver] = React.useState(false);
  const [word, setWord] = React.useState('');
  const [isPlayersTurn, setPlayersTurn] = React.useState(false);
  const [words, setWords] = React.useState<string[]>([]);

  const onNewName = (newName: string) => {
    if (!gameOver) {
      setWord(newName);
      if (isValidNewWord(newName, words)) {
        setWords((prevWords) => [...prevWords, newName]);
        setPlayersTurn((prev) => !prev);
      } else {
        setGameOver(true);
      }
    }
  };

  const onCountDownEnd = () => {
    setGameOver(true);
  };

  return (
    <>
      <Modal
        isOpen={gameOver}
        contentLabel="Game Result"
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
        <GameResult lastWord={word} winner={isPlayersTurn ? 'Computer' : 'You'} words={words} />
      </Modal>
      <div className="players">
        <ErrorBoundary>
          <Player
            isActive={isPlayersTurn}
            onChange={onNewName}
            word={word}
            onCountDownEnd={onCountDownEnd}
          />
        </ErrorBoundary>
      </div>
      <div className="players">
        <ErrorBoundary>
          <Computer
            isActive={!isPlayersTurn}
            onChange={onNewName}
            word={word}
            onCountDownEnd={onCountDownEnd}
          />
        </ErrorBoundary>
      </div>
    </>
  );
};
Modal.setAppElement('body');
export default Game;
