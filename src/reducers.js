export default (state = [], action) => {
    switch (action.type) {
      case 'ADD_NOTIFICATION':
        return [
          ...state,
          {
            text: action.text,
            status: action.status
          }
        ]
      case 'REMOVE_NOTIFICATION':
        console.log(action);
        
        return state.filter((data, i) => i !== action.id)
      default:
        return state
    }
  }
  