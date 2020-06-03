const actions = {}

actions.movement = payload => {
  return {
    type: 'MOVEMENT',
    payload: payload
  }
}

actions.reset = payload => {
  return {
    type: 'RESETBOARD',
    payload: payload
  }
}

actions.turn = payload => {
  return {
    type: 'CHANGETURN',
    payload: payload
  }
}

actions.takePiece = payload => {
  return {
    type: 'TAKEPIECE',
    payload: payload
  }
}

export { actions }
