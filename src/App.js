import React, { Component } from 'react';
// IMPORT REACT ROUTER DOM
import {BrowserRouter,Switch, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import './todolist.css'
import './nav.css'
// import List from './List.js'


function Home(){
  return <h1>Home</h1>
}

function ListView(){
  return (
    <div>
    <h2>Semua Users</h2>
    <ul>
      <li><Link to='users/caesar'>Caesar</Link></li><br/>
      <li><Link to='users/arsy'>Arsy</Link></li>
    </ul>
    </div>
  )
}

function DetailView({match}){
  return <h2>Ini Halaman {match.params.name}</h2>
}

function NoMatch(){
  return <h3>404,halaman tidak ditemukan</h3>
}

class App extends Component {


  render(){
    return(
      <BrowserRouter>
        <div>
          <nav>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/about'>About</Link></li>
          </nav>
          <main>
          <Switch>
            <Route path="/" exact component ={Home}/>
            <Route path="/users" exact component ={ListView}/>
            <Route path="/users/:name" exact component={DetailView}/>
            <Route component={NoMatch}/>
          </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }













  //constructor
  // constructor(props){
  //   super(props)
  //   this.state = {
  //       todoItem:'',
  //       items:[]
  //   }
  // }
  //
  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.setState({
  //     items   : [...this.state.items,this.state.todoItem],
  //     todoItem:''
  //   })
  // }
  //
  // handleChange = (event) => {
  //   this.setState({
  //     todoItem : event.target.value
  //   })


      // <div className="container">
      //   <form onSubmit={this.handleSubmit} className="form">
      //     <h2>Aplikasi To Do List</h2>
      //     <input value={this.state.todoItem} onChange={this.handleChange}/>
      //     <button>Add</button>
      //     <List items={this.state.items} />
      //   </form>
      //
      // </div>

}


export default App;
