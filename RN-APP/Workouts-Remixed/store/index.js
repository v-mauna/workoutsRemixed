import {createStore,applyMiddleware,combineReducers} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import libraryReducer from './customLibrary'
import programsReducer from './programs'
import usersReducer from './users'
import exerciseReducer from './exercises'
import userReducer from './user'

const middleWare = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const reducer = combineReducers({libraryReducer,programsReducer,usersReducer,exerciseReducer,userReducer})
const store = createStore(reducer, middleWare)

export default store
export * from './users'
export * from './customLibrary'
export * from './exercises'
export * from './programs'
export * from './user'