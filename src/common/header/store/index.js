import reducer from "./reducer";
import * as actionCreators from './actionCreators'
import * as actionTypes from './actionTypes'

// header下的reducer的出口文件，通过引入index.js来引入reducer,store文件下所有内容都从此处导出
export { reducer, actionCreators, actionTypes }