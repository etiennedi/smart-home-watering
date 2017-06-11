const rx = require('rxjs')
const ro = require('redux-observable')

const epicTestHelper = (epic, action, state = {}, dependencies = {}) => {
  const actions = new rx.Subject();
  const actions$ = new ro.ActionsObservable(actions);
  const store = { getState: () => state };
  const promiseEpic = epic(actions$, store, dependencies)
    .toArray()
    .toPromise();

  actions.next(action);
  actions.complete();

  return promiseEpic;
};

module.exports = epicTestHelper;
