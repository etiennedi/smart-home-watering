const UPDATE = 'agent/controller/UPDATE';
const TOGGLE = 'agent/controller/TOGGLE';

const reducer = (state={}, action) => {
  switch (action.type) {

    case UPDATE: {
      return Object.assign(state, {
        [action.zone] : action.status
      })
    }

    default: {
      return state;
    }
  }
}

// udpate is used to reflect the actual state (i.e. consumed by reducer)
const update = (zone, status) => ({
  type: UPDATE,
  zone,
  status,
})

// toggle is used to create a side effect (i.e. consumed by epic)
const toggle = (zone, status) => ({
  type: TOGGLE,
  zone,
  status,
})

const actionCreators = {
  update,
  toggle,
}

module.exports = {
  reducer,
  actionCreators,
}
