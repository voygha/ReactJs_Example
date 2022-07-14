import React , { Component} from "react";


/* Otra forma de exportar es dentro de la misma clase
export default class TaskForm extends Component{} */

//extends - heredar 
class TaskForm extends Component{
    state= {
        title: '',
        description: ''
    }

    onSubmit = (event) => {
        console.log('enviando... ');
        //Se imprime el valor del estado despues del evento onSubmit
        console.log(this.state)
        //this.state.title --- Le pasa el valor del titulo  y la descripcio a la funcion addTask que se ejecuta solo en el evento onclick
        this.props.addTask(this.state.title, this.state.description)
        //preventDefault --- Hace que la pagina no se refresque cada que sucede el evento onSubmit
        event.preventDefault();
    }

    onChange = (event) => {
        //event.target.name --- Extraemos el nombre del componente HTML
        //event.target.value --- Extraemos el valor que estamos escribiendo en el form
        //impresio de datos en la consola
        //console.log(event.target.name, event.target.value)
        this.setState(
            {
                //El atributo html es enviado y se deposita en la variable correspondiente de la funcion onSubmit que esta arriba 
                [event.target.name]: event.target.value
            }
        )
    }

    render()
    {
        //imprime los props que hereda en este caso de App, el cual es el de addTask
        //console.log(this.props)
        return(
            //this.onSubmit - indicar que detro de la misma clase usare el metodo onSubmit
            <form onSubmit={this.onSubmit}>
                <br/>
                {/* Un comentario JSX */}
                {/* onChange={this.onChange} ---  onChange= Hace referencia a su evento onChage, es decir cada que se de click
                this.onChange --- Hace referenncnia a la funcion que definimos que pertenece a la misma clase - puede ser cualquier nombre 
                */}
                <input type="text" placeholder=" Write a Task " name="title" onChange={this.onChange} value={this.state.title}/>
                <br/>
                {/* value={this.state.description} ---- Definimos el valor del compoete HTML en este caso la descripcion de una Task */}
                <textarea placeholder=" Write a Description " name="description" onChange={this.onChange} value={this.state.description}/>
                <br/>
                <input type="submit" />
                <button type=" Submit "> Save </button>
            </form>
        )
    }
}
export default TaskForm;