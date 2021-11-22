import { ADD_TAG,SELECTED_TAG,REMOVE_TAG } from '../content';

const addTags = (data)=>{return {type:ADD_TAG,data}}
const removeTag = (data)=>{return {type:REMOVE_TAG,data}}
const selectedTag = (data)=>{return {type:SELECTED_TAG,data}}


export {addTags,selectedTag,removeTag}