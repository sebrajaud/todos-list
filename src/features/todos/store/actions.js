import apiFirebase from '../../../config/api.firebase';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';
export const REQUEST_TODOS = 'REQUEST_TODOS';
export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

export const REQUEST_ADD_TODO = 'REQUEST_ADD_TODO';
export const FETCH_ADD_TODO_SUCCESS = 'FETCH_ADD_TODO_SUCCESS';
export const FETCH_ADD_TODO_ERROR = 'FETCH_ADD_TODO_ERROR';

export const REQUEST_DELETE_TODO = 'REQUEST_DELETE_TODO';
export const FETCH_DELETE_TODO_SUCCESS = 'FETCH_DELETE_TODO_SUCCESS';
export const FETCH_DELETE_TODO_ERROR = 'FETCH_DELETE_TODO_ERROR';

export const REQUEST_TOGGLE_TODO = 'REQUEST_TOGGLE_TODO';
export const FETCH_TOGGLE_TODO_SUCCESS = 'FETCH_TOGGLE_TODO_SUCCESS';
export const FETCH_TOGGLE_TODO_ERROR = 'FETCH_TOGGLE_TODO_ERROR';


export const visibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_DONE : 'SHOW_DONE',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}

export const addTodo = (todo) => ({
    type: ADD_TODO,
    todo
})

export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    index
})

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
})

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    index
})

export const requestTodos = () => ({
    type: REQUEST_TODOS,
})

export const fetchTodosSuccess = (todos) => ({
    type: FETCH_TODOS_SUCCESS,
    todos,
})

export const fetchTodosError = (error) => ({
    type: FETCH_TODOS_ERROR,
    error,
})

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(requestTodos());
        return apiFirebase.get('todos.json').then(
            response => {
                const datas = response.data;
                return dispatch(fetchTodosSuccess(datas));
            },
             error =>{
                return dispatch(fetchTodosError(error));
            })
    }
}

export const requestAddTodo = () => ({
    type: REQUEST_ADD_TODO,
    loading:true
});

export const fecthAddTodo = (todo) => {
    return (dispatch, getState) => {
        const todos = [ ...getState().todos.datas, todo ]
        
        dispatch(requestAddTodo());

        return apiFirebase.put('todos.json', todos).then(
            response => {
                return dispatch(fetchAddTodoSuccess(todo))
            },
            error => {
                return dispatch(fetchAddTodoError(error))
            }
        )

    }
}

export const fetchAddTodoSuccess = (todo) => ({
    type: FETCH_ADD_TODO_SUCCESS,
    todo,
    loading: false
})

export const fetchAddTodoError = (error) => ({
    type: FETCH_ADD_TODO_ERROR,
    laoding: false,
    error
})


export const requestDeleteTodo = () => ({
    type: REQUEST_DELETE_TODO,
})

export const fetchDeleteTodoSucces = (todo) => ({
    type: FETCH_DELETE_TODO_SUCCESS,
    todo
})

export const fetchDeleteTodoError = (error) => ({
    type: FETCH_DELETE_TODO_ERROR,
    error: error,
})

export const fetchDeleteTodo = (todo) => {
    return (dispatch, getState) => {

        const todos = getState().todos.datas.filter( t =>  t.name !== todo )
        
        dispatch(requestDeleteTodo());
        
        
        return apiFirebase.put('todos.json', todos).then(
            response => dispatch(fetchDeleteTodoSucces(todo)),
            error => dispatch(fetchDeleteTodoError(error))
        )
            
    }
}

export const requestToggleTodo  = () => ({
    type: REQUEST_TOGGLE_TODO,
})


export const fetchToggleTodoSuccess  = (todo) => ({
    type: FETCH_TOGGLE_TODO_SUCCESS,
    todo
})

export const fetchToggleTodoError  = (error) => ({
    type: FETCH_TOGGLE_TODO_SUCCESS,
    error
})

export const fetchToggleTodo = (todo) => {
    return (dispatch, getState) => {
        
        dispatch(requestToggleTodo());
        const todos = getState().todos.datas.map( t => {
            return t.name === todo ? {...t, done: !t.done } : t;
        })
        return apiFirebase.put('todos.json', todos).then(
            response => dispatch(fetchToggleTodoSuccess(todo)),
            error => dispatch(fetchToggleTodoError(error))
        )
        
    }
}