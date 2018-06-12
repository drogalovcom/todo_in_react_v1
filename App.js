import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filter: 'all',
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
        todos.unshift({id: this.state.nextId, text: todoText, done: false});
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        });
    }

    addTodoCenter = (todoText) => {
        let todos = this.state.todos.slice();
        let indexCenter = todos.length / 2; // поиск середины массива
        todos.splice(indexCenter, 0, {id: this.state.nextId, text: todoText, done: false});
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        });
    }

	addTodo = (todoText) => {
		let todos = this.state.todos.slice();
		todos.push({id: this.state.nextId, text: todoText, done: false});
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

    updateFilter = filter => {
		this.setState({ filter });
	}

	todosFiltered = () => {
		if (this.state.filter === 'all') {
			return this.state.todos;
		} else if (this.state.filter === 'active') {
			return this.state.todos.filter(todo => !todo.done);
		} else if (this.state.filter === 'completed') {
			return this.state.todos.filter(todo => todo.done);
		}
		return this.state.todos;
	}

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
			<h1>TODO LIST</h1>
        </header>
		<Grid className="todo-wrapper">
			<TodoInput todoText="" addTodoUn={this.addTodoUn} addTodo={this.addTodo} addTodoCenter={this.addTodoCenter} />
			<ListGroup>
				<Row>
                    <Col sm={12} md={8} mdOffset={2} className="list_items">
                        {
                            this.todosFiltered().map((todo) => {
                                return <TodoItem todo={todo} updateData={this.updateData} id={todo.id} key={todo.id} removeTodo={this.removeTodo} handleClick={this.handleClick}/>
                            })
                        }
                    </Col>
				</Row>
			</ListGroup>
            <ToggleButtonGroup className="filter_items" type="radio" name="options" defaultValue={1}>
                <ToggleButton value={1} bsSize="xsmall" className={({'active': this.state.filter === 'all'})} onClick={() => this.updateFilter('all')}>Все: { this.state.todos.length }</ToggleButton>
                <ToggleButton value={2} bsSize="xsmall" className={({'active': this.state.filter === 'active'})} onClick={() => this.updateFilter('active')}>Активные: { this.state.todos.filter((todo) => {return !todo.done}).length}</ToggleButton>
                <ToggleButton value={3} bsSize="xsmall" className={({'active': this.state.filter === 'completed'})} onClick={() => this.updateFilter('completed')}>Выполненные: { this.state.todos.filter((todo) => {return todo.done}).length}</ToggleButton>
            </ToggleButtonGroup>
		</Grid>
      </div>
    );
  }
}

export default App;
