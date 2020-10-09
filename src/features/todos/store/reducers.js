import * as actions from './actions';

export const todosReducer = (state = {datas:[], loading: false, error: null}, action) => {
    
    switch(action.type) {

        case actions.REQUEST_TOGGLE_TODO : {
            return{
                ...state,
                loading:true
            }
        }

        case actions.FETCH_TOGGLE_TODO_SUCCESS : {
            return {
                ...state,
                datas: state.datas.map( (item) => item.name === action.todo ? {...item, done: !item.done} : item ),
                loading: false,
            }
        }

        case actions.FETCH_TOGGLE_TODO_ERROR: {
            return {
                ...state, 
                loading: false,
                error: action.error
            }
        }

        case actions.REQUEST_DELETE_TODO : {
            return {
                ...state,
                loading: true
            }
        }

        case actions.FETCH_DELETE_TODO_SUCCESS : {
            const newState = state.datas.filter( t => t.name !== action.todo );
            
            return {
                ...state,
                datas: newState,
                loading: false
            }
        }

        case actions.FETCH_DELETE_TODO_ERROR : {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }

        case actions.REQUEST_ADD_TODO: {
            return {
                ...state,
                loading: true
            }
            break;
        }

        case actions.FETCH_ADD_TODO_SUCCESS: {
            
            return { 
                ...state, 
                datas : [ ...state.datas, action.todo],
                loading: false,
                error: null
            }
            break;
        }
        
        case actions.FETCH_ADD_TODO_ERROR: {
            
            return { 
                ...state, 
                loading: false,
                error: action.error
            }
            break;
        }


        case actions.DELETE_TODO: {
            return {
                ...state,
                datas: state.filter((item, i) => i !== action.index)
            } 
            break;
        }

        case actions.TOGGLE_TODO: {
            return {
                ...state,
                datas: state.datas.map( (item, i) => i === action.index ? {...item, done: !item.done} : item )
            }
            break;
        }

        case actions.REQUEST_TODOS: {
            return {
                ...state,
                loading: true
            }
            break;
        }
    
        case actions.FETCH_TODOS_SUCCESS: {
            if(action.todos){
                return {
                    ...state,
                    datas: [...state.datas, ...action.todos ],
                    loading:false,
                    error: null
                }
            } else {
                return {
                    ...state, 
                    loading: false,
                    error: null
                }
            }

            break;
        }
        case actions.FETCH_TODOS_ERROR: {
            return {
                ...state,
                loading:false,
                error: action.error
            }
            break;
        }

        default: {
            return state;
            break;
        }

    }
}

export const filter = (state = actions.visibilityFilters.SHOW_ALL , action) => {
    switch(action.type) {

        case actions.SET_FILTER: {
            return action.filter
        }    
    
        default: {
            return state;
        }
    
    
    }
}


/*
export const todosReducer = (state, action) => {
    
    return {
        todos: todoReducer(state.todos, action),
        filter:  filterReducer(state.filter, action)
        
    }
}


*/