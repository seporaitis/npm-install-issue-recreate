import React from 'react';
import { ThemeProvider } from 'emotion-theming';


const theme = {
};


export default function Provider({ children }: React.PropsWithChildren<{}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
