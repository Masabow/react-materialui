import { combineReducers } from 'redux'

const initState = {
    items:[
    {
        id:1,
        name:'test1',
        volume:50,
        lastDate:new Date()
    },
    {
        id:2,
        name:'test2',
        lastDate:new Date()
    }]
}

/**
 * Item reducer
 * @param  {[type]} [state=items] [description]
 * @param  {[type]} action        [description]
 * @return {[type]}               [description]
 */
function item(state = initState, action) {
    switch(action.type) {
        case 'CHANGE_NAME':
          return Object.assign({}, state, {
            items: state.items.map((item, index) => {
              if (index === action.id) {
                return Object.assign({}, item, {
                  name:action.name
                })
              }
              return item
            })
          })
        case 'ADD_ITEM':
          return Object.assign({}, state, {
            items:[
            ...state.items,{}
            ]
          })
        default:
          return state;
    }
    console.log("return:"+state)
    return state;
}

function test(state, action) {
  return {}
}

export default item
