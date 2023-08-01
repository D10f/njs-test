import { useState } from 'react'
import './App.css'

const App = () => (
  <header>
    <h1>{window.__ENV__.REACT_APP_TITLE}</h1>
    <p>{window.__ENV__.REACT_APP_SUBTITLE}</p>
  </header>
);


export default App
