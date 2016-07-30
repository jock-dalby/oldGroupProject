// import { immutable, fromJS, toJS} from 'immutable'
import jump from './lib/jump'
import moveForward from './lib/moveForward.js'

const INITIAL_STATE = {
  robot: {
    direction: 0,
    isOnBox: false,
    positionX: 0,
    positionY: 4
  },
  board: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1]
  ],
  commandQueue: [

  ]
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GO_BUTTON':
      return state

    case 'STOP_BUTTON':
      return state

    case 'MOVE_FORWARD':
      const newFwdState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue]
      }
      moveForward(newFwdState.robot, newFwdState.board)
      return newFwdState

    case 'TURN_LEFT':
      const newLeftState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue]
      }
      // If direction is 0, set it to 270, otherwise subtract 90
      newLeftState.robot.direction = newLeftState.robot.direction ? newLeftState.robot.direction - 90 : 270
      return newLeftState

    case 'TURN_RIGHT':
      const newRightState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue]
      }
      // If direction is 270, set it to 0, otherwise add 90
      newRightState.robot.direction = newRightState.robot.direction === 270 ? 0 : newRightState.robot.direction + 90
      return newRightState

    case 'JUMP_UP':
      const jumpState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue]
      }
      jump(jumpState.robot, jumpState.board)
      return jumpState

    case 'ADD_FORWARD':
      const newFwdState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue]
      }
      return newFwdState

    case 'ADD_LEFT':
      const newLeftState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue]
      }
      return newLeftState

    case 'ADD_RIGHT':
      const newRightState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue]
      }
      return newRightState

    case 'ADD_JUMP':
      const jumpState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue]
      }
      return jumpState

    default:
      return state

  }
}

export default reducer
