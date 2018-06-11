import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import TodoInput from './components/todoInput'
import TodoItem from './components/todoItem'
import Filtersection from './components/filtersection'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{id: 0, text: "Это моя первая задача!", done: false },
				{id: 1, text: "Это моя вторая задача!", done: true },
				{id: 2, text: "Это моя третья задача!", done: false}
			],
			nextId: 3
		};
	}

    addTodoUn = (todoText) => {
        let todos = this.state.todos.slice();
        todos.unshift({id: this.state.nextId, text: todoText});
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        });
    }

    addTodoCenter = (todoText) => {
        let todos = this.state.todos.slice();
        let indexCenter = todos.length / 2; // поиск середины массива
        todos.splice(indexCenter, 0, {id: this.state.nextId, text: todoText});
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        });
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
			todos: this.state.todos.filter((todo) => todo.id !== id)
		});
	}

	updateData = (id, value) => {
		const newTodo = this.state.todos.reduce((result, todo) => {
			if (todo.id === id){
        return [...result, {id: id, text: value}];
			}
        return [...result, todo];
		}, []);
		this.setState({todos: newTodo});

	}

    handleClick = (id) => {
        console.log('buttonClicked', id);
        const newTodo = this.state.todos.reduce((result, todo) => {
        	if (todo.id === id) { // проверим айди
                return [...result, {...todo, done: !todo.done }]; //...возвращаем тудушки, {...все данные туду, значение дон изменяем}
			}
			return [...result, todo] // иначе возвращаем прежний результат
		}, []);
        this.setState({ todos: newTodo });
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
			<TodoInput todoText="" addTodoUn={this.addTodoUn} addTodo={this.addTodo} addTodoCenter={this.addTodoCenter} />
			<Filtersection />
			<ul>
				{
					this.state.todos.map((todo) => {
						return <TodoItem todo={todo} updateData={this.updateData} id={todo.id} key={todo.id} removeTodo={this.removeTodo} handleClick={this.handleClick}/>
					})
				}
			</ul>
		</div>
      </div>
    );
  }
}

export default App;
