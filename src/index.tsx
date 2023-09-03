import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './global';
import { Theme } from './Theme';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from './contexts/openMenu';
import { CategoryProvider } from './contexts/searchCategories';
import { SearchProvider } from './contexts/searchContext';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppProvider>
        <CategoryProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </CategoryProvider>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);