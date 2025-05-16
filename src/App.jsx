import { useState } from 'react'
import './App.css'
import Quiz from './components/quiz';
import Results from './components/results';

function App() {

  return (
    <div className='app-container'> 
    <h1>Quiz App</h1>
    
    <Quiz/>
    </div>
  )
}

export default App;
