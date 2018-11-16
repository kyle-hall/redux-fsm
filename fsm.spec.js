
import { FSM, store } from './fsm'
import { STATES } from './states'

describe('Finite State Machine', () => {

  it('should default to the waiting state', () => {
    const fsm = FSM()

    expect(fsm.state()).toBe(STATES.WAITING)
  })

  it('should switch to active after receiving an ACTIVATE message', async () => {
    const fsm = FSM()

    await fsm.activate()

    expect(fsm.state()).toBe(STATES.ACTIVE)
  })

})
