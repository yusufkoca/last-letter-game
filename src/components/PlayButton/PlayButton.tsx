import React from 'react';
import './PlayButton.scss';

const PlayButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className="playBut"
      onClick={() => {
        onClick && onClick();
      }}
    >
      <svg
        version="1.1"
        x="0px"
        y="0px"
        width="213.7px"
        height="213.7px"
        viewBox="0 0 213.7 213.7"
        enableBackground="new 0 0 213.7 213.7"
      >
        <polygon
          className="triangle"
          id="XMLID_18_"
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="
	73.5,62.5 148.5,105.8 73.5,149.1 "
        />

        <circle
          className="circle"
          id="XMLID_17_"
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          cx="106.8"
          cy="106.8"
          r="103.3"
        />
      </svg>
    </div>
  );
};

export default PlayButton;
