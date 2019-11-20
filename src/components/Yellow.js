import React from 'react'
import { connect } from 'react-redux'
import { addNotification } from '../actions'

const Yellow = ({ dispatch }) => {
  return (
    <div className='block yellow'>
      <button onClick={() => dispatch(addNotification('Notification from the Yellow Component', 'fail'))}>
        Toggle Fail Notification
      </button>
      <button onClick={() => dispatch(addNotification('Notification from the Yellow Component', 'success'))}>
        Toggle Success Notification
      </button>
    </div>
  )
}

export default connect()(Yellow)
