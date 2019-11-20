import React from 'react'
import { connect } from 'react-redux'
import { removeNotification } from '../actions'
import './Notification.css'

const Notification = ({ dispatch, text, status = 'success', index }) => {
  return (
    <div className={`notification ${status}`}>
      <p>{text}</p>
      <button onClick={() => dispatch(removeNotification(index))}>X</button>
    </div>
  )
}

export default connect()(Notification)
