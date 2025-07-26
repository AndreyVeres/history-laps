import { FC, type PropsWithChildren } from 'react';
import { GlobalStyles } from './global-styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './config';
import { Fonts } from './fonts';

export const AppTheme: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <Fonts />
    {children}
  </ThemeProvider>
);
