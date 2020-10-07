import React from 'react';
import './CustomButton.scss';

type CustomButtonProps = {
  onClick?: () => void;
  text?: string;
};

const CustomButton = ({ onClick, text = '' }: CustomButtonProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className="button"
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      onKeyDown={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <span className="text">{text}</span>
      <span className="line -right" />
      <span className="line -top" />
      <span className="line -left" />
      <span className="line -bottom" />
    </div>
  );
};

export default CustomButton;
