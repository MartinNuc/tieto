import React, { useContext, useState } from 'react';

type ContextValue = {
  isDark: boolean;
  switchTheme: () => void;
};

const ThemeContext = React.createContext<ContextValue>({} as unknown as ContextValue);

type Props = {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(false);

  const value = {
    isDark,
    switchTheme: () => setIsDark(!isDark)
  };

  return <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);