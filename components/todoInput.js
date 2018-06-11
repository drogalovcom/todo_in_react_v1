import React from 'react';

export default class TodoInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {value: ""};
		this.handleChange = this.handleChange.bind(this);
        this.addTodoUn = this.addTodoUn.bind(this);
		this.addTodo = this.addTodo.bind(this);
        this.addTodoCenter = this.addTodoCenter.bind(this);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

    addTodoCenter(todo) {
        if (todo.length > 0) {
            this.props.addTodoCenter(todo);
            this.setState({value: ''});
        }
    }

    addTodoUn(todo) {
        if (todo.length > 0) {
            this.props.addTodoUn(todo);
            this.setState({value: ''});
        }
    }

	addTodo(todo) {
		if (todo.length > 0) {
			this.props.addTodo(todo);
			this.setState({value: ''});
		}
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Добавить задачу"
					   value={this.state.value}
					   onChange={this.handleChange}
				/>
                <button className="btn btn-primary" onClick={() => this.addTodoUn(this.state.value)}>Начало</button>
                <button className="btn btn-primary" onClick={() => this.addTodoCenter(this.state.value)}>Середина</button>
				<button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Конец</button>
			</div>
		);
	}
}