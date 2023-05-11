import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/general-style.scss'
import reportWebVitals from './reportWebVitals';
import ThemeContextWrapper from './theme-context/themeContextWrapper';

ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>{' '}
  </ThemeContextWrapper>,
  document.getElementById('root'),
);

reportWebVitals();