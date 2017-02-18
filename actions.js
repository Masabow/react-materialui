/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const CHANGE_NAME = "CHANGE_NAME"
export const CHANGE_DATE = ""

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addItem(text) {
  return { type: ADD_ITEM, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function changeName(text) {
  return {type:CHANGE_NAME, name:text, id:1}
}

export function changeLastDate(text) {
  return {type:CHANGE_DATE, date:text}
}