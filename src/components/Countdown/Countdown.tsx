import React, { useEffect, useState } from 'react';
import './Countdown.scss';

type CountdownProps = {
  startCount?: number;
  onEnd: () => void;
};

const Countdown = ({ startCount = 8, onEnd }: CountdownProps) => {
  const [count, setCount] = useState(startCount);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCount((prevCount) => {
        return prevCount > 0 ? prevCount - 1 : prevCount;
      });
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      onEnd();
    }
  }, [count, onEnd]);

  return <h1 className="countdown">{count}</h1>;
};

export default Countdown;
