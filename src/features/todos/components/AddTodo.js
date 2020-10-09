import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fecthAddTodo } from '../store/actions';


class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.input = React.createRef()
  }

  submitTodo = () => {   
    this.props.fecthAddTodo({
      name: this.input.current.value, 
      done:false
    })
    this.input.current.value = '';
  }
    

  render(){
    return(
      <div className="d-flex mb-4">
        <input ref={ this.input } className="form-control mr-5" type="text"/>
        <button onClick={ this.submitTodo } className="btn btn-success">Ajouter</button>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  fecthAddTodo: todo => dispatch(fecthAddTodo(todo))
})

export default connect(null, mapDispatchToProps)(AddTodo);
