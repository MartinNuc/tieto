import { useEffect, useState } from "react";
import cn from 'classnames';
import styles from './MouseTracker.module.css';

export const MouseTracker = () => {
  const [currentClickPosition, setCurrentClickPosition] = useState({ x: 0, y: 0 });
  const [previousClickPosition, setPreviousClickPosition] = useState({ x: 0, y: 0 });
  const [isOnTheLeft, setIsOnTheLeft] = useState(false);

  const onMouseMove = (event: MouseEvent) => {
    console.log('event handler ', currentClickPosition);
    setCurrentClickPosition({
      x: event.clientX,
      y: event.clientY
    });
  };
  useEffect(() => {
    window.addEventListener('click', onMouseMove);

    return () => {
      window.removeEventListener('click', onMouseMove);
    };
  }, []);

  useEffect(() => {
    setIsOnTheLeft(previousClickPosition.x < currentClickPosition.x);
    setPreviousClickPosition(currentClickPosition);
  }, [currentClickPosition]);

  const { x, y } = currentClickPosition;
  return (
    <div className={cn({
      [styles.red]: isOnTheLeft,
      [styles.green]: !isOnTheLeft
    })}>My mouse x position is {x} and y position is {y}</div>
  );
};
