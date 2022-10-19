import { useState } from "react";
import { useTheme } from "../contexts/theme-context";
import styles from './ToggleRedText.module.css';

export const ToggleRedText = () => {
  const [isRed, setIsRed] = useState(false);
  const { isDark } = useTheme();

  const handleToggle = () => setIsRed(!isRed);

  return (<div className={isDark ? styles.dark : ''}>
    <p>Tohle je nejaky text</p>
    <div className={styles.red}>Ahoj</div>
    <button onClick={handleToggle}>toggle</button>
  </div>)
}