
import { createStore } from 'redux'

import { STATES } from './states'

export const FSM = () => ({
  state: () => store.getState().currentState,
  activate: () => store.dispatch({type: 'ACTIVATE'})
})

const initialState = { currentState: STATES.WAITING };

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'WAIT':
      return initialState
    case 'ACTIVATE':
      return {
        currentState: STATES.ACTIVE
      }
    default:
      return state
  }
}

export const store = createStore(reducer)
