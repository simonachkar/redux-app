/**
 * Adding a notificaiton to the store
 * @param {String} text The text athat will be displayed on the push notification
 * @param {String} status 'fail' or 'success'
 */
export const addNotification = (text, status) => {
  return {
    type: 'ADD_NOTIFICATION',
    text,
    status
  }
}

/**
 * Removing a a notificaiton from the store
 * @param {String} id The notification's id
 */
export const removeNotification = id => {
  return {
    type: 'REMOVE_NOTIFICATION',
    id
  }
}
