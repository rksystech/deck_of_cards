import undoable from 'redux-undo'

const comment = (state, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        id: action.id,
        text: action.text,
        name: action.name,
        completed: false
      }
 
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        comment(undefined, action)
      ]
   
    default:
      return state
  }
}

const undoableTodos = undoable(comments)

export default undoableTodos
