import React from 'react'
import './App.css'
import Blue from './components/Blue'
import Yellow from './components/Yellow'
import Notification from './components/Notification'

function App() {
  return (
    <div className='App'>
      <Notification key={1} text={'Test Notification'} status={'success'} index={1} />
      <Notification key={2} text={'Test Notification'} status={'success'} index={2} />
      <Notification key={3} text={'Test Notification'} status={'fail'} index={3} />
      <div className='App-Content'>
        <Blue />
        <Yellow />
      </div>
    </div>
  )
}

export default App
