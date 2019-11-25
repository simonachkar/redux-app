import React from 'react'
import './Notification.css'

const Notification = ({ text = 'Default text', status = 'success' }) => {
  return (
    <div className={`notification ${status}`}>
      <p>{text}</p>
      <button>X</button>
    </div>
  )
}

export default Notification
