//Actions
import { SELECT, MOVEMENT, TOGGLEBLACK } from './actiontypes'

//Action Creators

export function select(payload) {
  console.log(payload)
  return {
    type: SELECT,
    payload: payload
  }
}

export function movement(payload) {
  return {
    type: MOVEMENT,
    payload: payload
  }
}

export function toggle(payload) {
  return {
    type: TOGGLEBLACK,
    payload: payload
  }
}
