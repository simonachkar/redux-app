import React from 'react'
import './Notification.css'

const Notification = ({ dispatch, text, status = 'success', index }) => {
  return (
    <div className={`notification ${status}`}>
      <p>{text}</p>
      <button>X</button>
    </div>
  )
}

export default Notification
