const TRIGGER = 'agent/timer/TRIGGER'
const TRIGGER_COMPLETED = 'agent/timer/TRIGGER_COMPLETED'
const INITIALIZE = 'agent/timer/INITIALIZE'

const initialize = () => ({
  type: INITIALIZE,
  time: Date.now()
})

const trigger = () => ({
  type: TRIGGER,
  time: Date.now()
})

const triggerCompleted = () => ({
  type: TRIGGER_COMPLETED,
  time: Date.now()
})

module.exports = {
  actions: {
    TRIGGER,
    TRIGGER_COMPLETED,
    INITIALIZE,
  },
  actionCreators: {
    trigger,
    triggerCompleted,
    initialize,
  }
}
