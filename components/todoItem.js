import React from 'react';


export default class TodoItem extends React.Component {
	constructor(props) {
		super(props);
	}

	removeTodo(id) {
		this.props.removeTodo(id);
	}

	render() {
		return (
			<div className="todoWrapper">
				{this.props.todo.text}<button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id)}>Удалить</button>
			</div>
		)
	}
}