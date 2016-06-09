import { combineReducers } from 'redux'
import growler from './growler.reducer'
import foo from './foo.reducer'

const rootReducer = combineReducers({growler, foo})

export default rootReducer
