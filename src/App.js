import React from 'react'

import './App.css'
import Blue from './components/Blue'
import Yellow from './components/Yellow'
import Notification from './components/Notification'

function App({ notifications }) {
  return (
    <div className='App'>
      <div className='App-Content'>
        <Blue />
        <Yellow />
      </div>
    </div>
  )
}


export default App
