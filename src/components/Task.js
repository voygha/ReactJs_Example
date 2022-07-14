import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Task.css';

//extends - heredar 
class Task extends Component
{
    /* Estilizar objetos mediante una funcion cambiante */
    StyleCompleted()
    {
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration:this.props.task.done ? 'line-through' : 'none'
        }
    }
    render()
    {
        const {task} = this.props;
        //className define una clase para el css
        return <p style={this.StyleCompleted()} className="red">
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>X</button>
        </p>
    }
}
/* VALIDACION DEL TIPO DE DATO */
Task.propTypes={
    task: PropTypes.object.isRequired
}
/*Crear estilos personalizados con objetos de Js */
const btnDelete= {
    fontSize: '18px',
    background: '#ea2027',
    color: 'fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor:'pointer'
}

export default Task;