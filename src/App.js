import React, {Component} from 'react';
import { BrowserRouter as Router, Route , Link }  from 'react-router-dom';

import './App.css';

import tasks from './sample/task.json';

//import components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';


class App extends Component{
  //obtiene todas las Task del arreglo
  state= {
    tasks:tasks
  }

  addTask= (title, description) =>
  {
    //Verificamos que los parametros que enviamos sean los correctos
    //console.log(title, description)
    const newTask ={
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    //verificar por consola que el objeto de newTask se genere correctamente con todo e id
    //console.log(newTask)
    //cambiar el estado
    this.setState({
      //tasks: ---Llama al state declarado arriba e indica que se va a alterar
      //...this.state.tasks -- indicamos que vamos a modificar el state, conservando los datos que ya teniamos y pasamos el siguiente parametro que se agregara
      //newTask --- es el nuevo parametro que se acopla al arreglo
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask= (id) =>{
    //newDelete es el nuevo arreglo que se genera una vez que el se borra una tarea
    //task => task.id !== id / recorre las tareas y las guarda en el nuevo arreglo solo si el id es diferente al id que se pide borrar, solo no guarda el id donde se produce el onnclick
    const newDelete= this.state.tasks.filter(task => task.id !== id)
    console.log(newDelete)
    this.setState({
      //guarda en el arreglo tasks solo las tareas que no fueron borradas
      tasks: newDelete
    })
  }

  checkDone= (id) =>
  {
    const newTaks=  this.state.tasks.map(task =>{
      //if(task.id === id) -- si el id esta selecccionado en el innput, entonces entra
      if(task.id === id)
      {
        //modifica la Task en su atributo done y lo cambia a lo contrario, si es True, lo cambia a False y viceversa
        task.done= !task.done
      }
      return task;
    });
    this.setState({task:newTaks})
  }

  render()
  {
    return <div>
      <Router>

        <a href='/'>Home</a>
        <br />
        <a href='/post'>Post</a>
        <br />

        <Route exact path="/" render={() =>{
          return <div>
            {/* Esta mandando con props la funcio de AddTask para que pueda comunnicarse con el form */}
            <TaskForm addTask={this.addTask}/>
            {/* deleteTask={this.deleteTask} --- Esta mandando con props la funcion de deleteTask para que pueda comunicarse con el boton que esta en el compoente tasks
            Despues esto se tiene que pasar de Tasks a task para poder mandar por props la funcion delete al boton */}
            <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
          </div>
          }}>
        </Route>
        <Route path="/post" component={Posts}></Route>
      </Router>
    </div>
  }
}

export default App;
