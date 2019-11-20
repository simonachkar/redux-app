import React from 'react'
import { connect } from 'react-redux'

import './App.css'
import Blue from './components/Blue'
import Yellow from './components/Yellow'
import Notification from './components/Notification'

function App({ notifications }) {
  return (
    <div className='App'>
      {notifications.reverse().map((notification, i) => (
        <Notification key={i} text={notification.text} status={notification.status} index={i} />
      ))}
      <div className='App-Content'>
        <Blue />
        <Yellow />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    notifications: state || []
  }
}

export default connect(mapStateToProps)(App)
