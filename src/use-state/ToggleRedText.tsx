import { useState } from "react";
import styles from './ToggleRedText.module.css';

export const ToggleRedText = () => {
  const [isRed, setIsRed] = useState(false);

  const handleToggle = () => setIsRed(!isRed);

  return (<>
    <div className={styles.red}>Ahoj</div>
    <button onClick={handleToggle}>toggle</button>
  </>)
}