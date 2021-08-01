import './App.css';
import SimpleContainer from './components/SimpleContainer/SimpleContainer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react';

import { ThemeProvider } from "./contexts/ThemeContext";

function App() {

  return (

      <ThemeProvider>
        <div className="App">
          <SimpleContainer />
        </div>
      </ThemeProvider>
    )
}

export default App;
 