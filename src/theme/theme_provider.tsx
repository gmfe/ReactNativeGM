import React from 'react';
import colors from './colors';
import _ from 'lodash';

export const ThemeContext = React.createContext({
  theme: {
    colors,
  },
});

const ThemeProvider = ({ children, theme }) => {
  const defaultColor = colors;
  const defaultTheme = _.merge({ colors: defaultColor }, theme);

  return (
    <ThemeContext.Provider
      value={{
        theme: {},
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
