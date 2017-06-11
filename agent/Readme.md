# Irrigation agent

The agent is a single-instance stateful service that triggers all the side-effects,
such as sending an on- or off signal to the sprinkler's IOT controllers.

It uses redux to manage its state and redux-observable to handle events and side-effects
