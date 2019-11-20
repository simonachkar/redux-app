# Redux App - Push Notifications

![App Design](redux-app.png)

## Actions

> Actions: the WHAT

Actions are a playload of information that send data from the app to the Redux store, using `store.dispatch()`.

Actions must have a `type` property that indicates the type of action being performed. Types should typically be defined as
string constants.

Once your app is large enough, you may want to move them into a separate module.

### Our App

For our app the actions are `addNotification` and `removeNotification` and they will be use to add and remove notifications form the app's store.

## Reducers

> Reducers: the HOW

Reducers specify how the application's state changes in reponse to to the actions sent to the store.

In Redux, all the application state is stored as a single object.

### Our app

Always keep in mind the shape of the app's state:

```js
notifications: [
  {
    text: '...',
    status: 'error'
  },
  {
    text: '...',
    status: 'info'
  }
]
```

## Store

So **actions** represents "what happens" and **reducers** represents "how it happens" as in how the state gets updated according to those actions.

The **store** is the object that brings them together. It **holds the app's state**, allow access to state via `getState()`, allow state update with `dispatch(action)`, registers and unregisters listeners with `subscribe(listener)` that will listen to a state change.

In a Redux app we just have ONE store.

> When you want to split your data handling logic, you'll use reducer composition instead of many stores.

## Data Flow

The data lifecycle in any Redux app follows **4 steps**:

1. You call `store.dispatch(action)`
1. The Redux store calls the reducer function you gave it
1. The root reducer may combine the output of multiple reducers into a single state tree (this does not apply to this app)
1. The Redux store saves the complete state tree returned by the root reducer

## React

Now we need to hook the store to React, and it's done in `index.js`, by wrapping the `<App />` component by the `<Provider>` component that takes `store` as prop.

```jsx
<Provider store={store}>
  <App />
</Provider>
```