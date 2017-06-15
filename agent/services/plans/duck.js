const REQUESTED = 'agent/plans/REQUESTED';
const FAILED = 'agent/plans/FAILED';
const RECEIVED = 'agent/plans/RECEIVED';

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

const received = plan => ({
  type: RECEIVED,
  payload: plan,
})

const requested = () => ({
  type: REQUESTED,
})

const error = (error) => ({
  type: FAILED,
  error,
})

const actionCreators = {
  received,
  requested,
  error
}

const actions = {
  REQUESTED
}

module.exports = { reducer, actions, actionCreators };
