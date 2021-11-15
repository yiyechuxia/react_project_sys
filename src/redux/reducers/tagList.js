import {ADD_TAG} from '../content'
const initStore = [
  {id:0,icon:'',title:'首页',key:'0',route:'/home'}
]
export default function TagList(prevStore=initStore,action){
  const {type,data} = action
  switch (type) {
    case ADD_TAG:
      return [...prevStore,data]
    default:
      return prevStore;
  }

}