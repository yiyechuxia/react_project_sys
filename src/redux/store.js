import { createStore,combineReducers } from 'redux';
import Collapsed from './reducers/collapsed'
import {TagList,SelectedTag} from './reducers/tagList'

const All_Reducers = combineReducers({
  Collapsed,
  TagList,
  SelectedTag
})

export default createStore(All_Reducers)