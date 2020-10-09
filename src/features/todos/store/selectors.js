import { createSelector } from 'reselect';
import { visibilityFilters } from './actions'

//export const filterSelector = state => state.filter;
export const filterSelector = (state, filter) => filter;
export const todosSelector = state => state.todos;


export const todosListSelector = createSelector(
    [todosSelector],
    (todos) => todos ? todos.datas : null
)

/*
*
*

// Filter selector sans React router 

export const filteredTodosDataSelector = createSelector(
    [filterSelector, todoListSelector],
    (filter, todos) => {
        if(todos && filter) {
            switch (filter) {
                case visibilityFilters.SHOW_DONE: {
                    return todos.filter( t =>  t.done )
                    
                }
                case visibilityFilters.SHOW_ACTIVE: {
                    return todos.filter( t  => !t.done )
                    
                }
                default: {
                    return todos
    
                }
            }
        }
    }
)
*/

// Filter Selector AVEC React router
export const filteredTodosDataSelector = createSelector(
    [filterSelector, todosListSelector],
    (filter, todos) => {
      if (todos && filter) {
        
        switch(filter) {
          case 'done': {
            return todos.filter( t => t.done )
          }
          case 'active': {
            return todos.filter( t => !t.done )
          }
          default: {
            return todos
          }
        }
      }
    }
  )