import { createStore } from 'redux'
import reducer from '../reducer'

let store = createStore(reducer)
import { changeName } from '../actions'

test('Dispatch test', () => {
  // Log the initial state
  console.log(store.getState())

  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )

  // Dispatch some actions
  store.dispatch(changeName('Learn about actions'))
  // store.dispatch(addTodo('Learn about reducers'))
  // store.dispatch(addTodo('Learn about store'))
  // store.dispatch(toggleTodo(0))
  // store.dispatch(toggleTodo(1))
  // store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

  // Stop listening to state updates
  unsubscribe()

});
