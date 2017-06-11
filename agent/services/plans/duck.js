const RECEIVED = 'agent/plans/received'

const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVED: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

const received = (plan) => ({
  type: RECEIVED,
  payload: plan,
})

const actionCreators = {
  received
}

module.exports = { reducer, actionCreators };
