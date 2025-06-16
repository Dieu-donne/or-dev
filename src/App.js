import React from 'react';
import MyRouts from './routers/routes';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div>
      <ThemeProvider>
        <MyRouts />
      </ThemeProvider>
    </div>
  );
}

export default App;
