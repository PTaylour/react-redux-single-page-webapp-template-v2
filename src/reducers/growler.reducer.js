import {GROWLER__HIDE, GROWLER__HIDED, GROWLER__SHOW} from '../actions/types/growler.types'

const initialState = {
  text: '',
  icon: '',
  type: '',
  status: 'hidden',
}

export default function growler(state = initialState, action) {
  switch (action.type) {
  case GROWLER__SHOW:
    return Object.assign({},
      state,
      action.growler,
      {status: 'show'}
    )

  case GROWLER__HIDE:
    return Object.assign({},
      state,
      action.growler,
      {status: 'hide'}
    )

  case GROWLER__HIDED:
    return Object.assign({},
      state,
      action.growler,
      {status: 'hide'}
    )

  default:
    return state
  }
}
