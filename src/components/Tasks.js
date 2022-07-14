import React, { Component } from "react";
import Task from './Task';
import PropTypes from 'prop-types';

//extends - heredar 
class Tasks extends Component{
    render()
    {
        return this.props.tasks.map(task => 
        <Task 
            task={task} 
            key={task.id} 
            //deleteTask={this.props.deleteTask}  Trae el props de App, y se debe enviar a Task para que el boton pueda hacer uso de esta funcion
            deleteTask={this.props.deleteTask}
            checkDone ={this.props.checkDone}
        />
        ) 
    }
}
    /* VALIDACION DEL TIPO DE DATO */
Tasks.propTypes= {
    tasks: PropTypes.array.isRequired
}
export default Tasks;