const reducer = (state=[], action) => {
  return state.concat(action)
}

module.exports = { reducer };
