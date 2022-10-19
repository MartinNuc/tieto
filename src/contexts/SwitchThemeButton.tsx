import { useTheme } from "./theme-context";

export const SwitchThemeButton = () => {
  const { switchTheme } = useTheme();

  return <button onClick={() => {
    switchTheme()
  }}>Switch theme</button>;
}