import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import TodoInput from './components/todoInput'
import TodoItem from './components/todoItem'
import Test from './components/test'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{id: 0, text: "Это моя первая задача!"},
				{id: 1, text: "Это моя вторая задача!"},
				{id: 2, text: "Это моя третья задача!"}
			],
			nextId: 3
		};
	}

	addTodo = (todoText) => {
		let todos = this.state.todos.slice();
		todos.push({id: this.state.nextId, text: todoText});
		this.setState({
			todos: todos,
			nextId: ++this.state.nextId
		});
	}

	removeTodo = (id) => {
		this.setState({
			todos: this.state.todos.filter((todo, index) => todo.id !== id)
		});
	}


	updateData = (id, value) => {
		const newTodo = this.state.todos.reduce((result, todo) => {
			if (todo.id === id){
                return [...result, {id: id, value: value}];
			}
            return [...result, todo];
		}, []);
		this.setState({todos: newTodo});
	}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To Do List</h1>
        </header>
		<div className="todo-wrapper">
			<Header />
			<TodoInput todoText="" addTodo={this.addTodo} />
			<ul>
				{
					this.state.todos.map((todo) => {
						return <TodoItem todo={todo} updateData={this.updateData} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
					})
				}
			</ul>
			<Test>
			</Test>
		</div>
      </div>
    );
  }
}

export default App;
