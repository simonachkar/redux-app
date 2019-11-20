import React from 'react'
import { connect } from 'react-redux'
import { addNotification } from '../actions'

const Blue = ({ dispatch }) => {
  return (
    <div className='block blue'>
      <button onClick={() => dispatch(addNotification('Notification from the Blue Component', 'fail'))}>
        Toggle Fail Notification
      </button>
      <button onClick={() => dispatch(addNotification('Notification from the Blue Component', 'success'))}>
        Toggle Success Notification
      </button>
    </div>
  )
}

export default connect()(Blue)
