import React from 'react';
import './App.css';

/* function Helloworld(props)
{
  console.log(props)
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.text}
    </div>
  )
} */
class Helloworld extends React.Component{
  state=
  {
    show: true
  }

  toggleShow = () =>
  {
    //!this.state.show cambia el valor del estado, si esta en true, cambia a false
    this.setState({show: !this.state.show})
  }

  render()
  {
    if(this.state.show)
    {
      return(
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.text}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
    }else{
      return <h1>No Elements
        <button onClick={this.toggleShow}>Toggle Show</button>
      </h1>
      
    }
      
  }
}

//Componente Principal a traves de funcion flecha
/*const App = ()=> <div>This is my component: <Helloworld/> </div>*/

//Componente Principal a traves de Funcion normal
function App() {
  return (
      <div>
        This is my component: <Helloworld text="Hello Luis" subtitle="Hello Perrin"/> 
        <Helloworld text="Hola Carlos"/>  
        <Helloworld text="Hola Su"/>  
      </div>
  );
}

//Componente Principal a traves de una clase
/*class App extends React.Component{
  rennder()
  {
    return <div>This is my component: <Helloworld/> </div>
  }
}*/

export default App;