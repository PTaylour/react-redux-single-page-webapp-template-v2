import { FOO } from '../actions/types/foo.types';

const groupReducer = (state = {
  world: 'default'
}, action) => {

  switch (action.type) {

    case FOO:
      return Object.assign({}, state, {world: 'world!'})

    default:
      return state;
  }
}

export default groupReducer
