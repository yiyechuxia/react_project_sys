import { ADD_TAG,SELECTED_TAG } from '../content';

const addTags = (data)=>{return {type:ADD_TAG,data}}
const selectedTag = (data)=>{return {type:SELECTED_TAG,data}}

export {addTags,selectedTag}