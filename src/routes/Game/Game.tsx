import React, { useReducer } from 'react';
import Modal from 'react-modal';
import GameResult from './GameResult';
import './Game.scss';
import Player from './Player';
import Computer from './Computer';
import ErrorBoundary from '../../components/ErrorBoundary';
import isValidNewWord from '../../utils/isValidNewWord';

type GameState = {
  gameOver: boolean;
  word: string;
  isPlayersTurn: boolean;
  words: string[];
};

const initialState: GameState = { gameOver: false, word: '', isPlayersTurn: false, words: [] };

type actions =
  | { type: 'SET_GAME_OVER'; payload: boolean }
  | { type: 'SET_PLAYERS_TURN'; payload: boolean }
  | { type: 'ADD_WORD'; payload: string }
  | { type: 'SET_WORD'; payload: string };

type reducerType = (state: GameState, action: actions) => GameState;

const reducer: reducerType = (state, action) => {
  switch (action.type) {
    case 'SET_GAME_OVER':
      return { ...state, gameOver: action.payload };
    case 'SET_PLAYERS_TURN':
      return { ...state, isPlayersTurn: action.payload };
    case 'ADD_WORD':
      return { ...state, words: [...state.words, action.payload] };
    case 'SET_WORD':
      return { ...state, word: action.payload };
    default:
      return state;
  }
};

const Game = () => {
  const [{ gameOver, words, word, isPlayersTurn }, dispatch] = useReducer(reducer, initialState);

  const onNewName = (newName: string) => {
    if (!gameOver) {
      dispatch({ type: 'SET_WORD', payload: newName });
      if (isValidNewWord(newName, words)) {
        dispatch({ type: 'ADD_WORD', payload: newName });
        dispatch({ type: 'SET_PLAYERS_TURN', payload: !isPlayersTurn });
      } else {
        dispatch({ type: 'SET_GAME_OVER', payload: true });
      }
    }
  };

  const onCountDownEnd = () => {
    dispatch({ type: 'SET_GAME_OVER', payload: true });
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
