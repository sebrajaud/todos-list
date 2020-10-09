import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { fetchDeleteTodo, fetchToggleTodo, visibilityFilters, fetchTodos } from '../store/actions';
import { filteredTodosDataSelector } from '../store/selectors';


const mapStateToProps = (state, ownProps) => {
    const filter = ownProps.match.params.filter;
    
    return {
        todos: filteredTodosDataSelector(state, filter)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchToggleTodo: (todo) => dispatch(fetchToggleTodo(todo)),
    fetchDeleteTodo: (todo) => dispatch(fetchDeleteTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos())
})


class TodoList extends Component  {

    constructor(props){
        super(props);
        this.props.fetchTodos();
    }

    render() {
        console.log('render')
        const { fetchDeleteTodo, fetchToggleTodo, todos } = this.props;
        return(
            <ul className="list-group">
                { todos && todos.map( ( todo, index ) => (
                     <TodoItem 
                        key={ todo.name } 
                        todo={ todo } 
                        fetchToggleTodo={ () => fetchToggleTodo(todo.name) } 
                        fetchDeleteTodo={ () => fetchDeleteTodo(todo.name) } 
                    />
                )) }
            </ul>
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
