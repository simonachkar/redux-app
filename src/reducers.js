/*
Always keep in mind the shape of the app's state:

{
  notifications: [
    {
      text: '...',
      status: 'success'
    },
    {
      text: '...',
      status: 'fail'
    }
  ]
}
*/

const initialState = {
  notifications: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            text: action.text,
            status: action.status
          }
        ]
      }
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter((data, i) => i !== action.id)
      }
    default:
      return state
  }
}
