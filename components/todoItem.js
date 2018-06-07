import React from 'react';


export default class TodoItem extends React.Component {
		constructor(props) {
			super(props);
			this.state = {editing: false};
		}

		componentDidMount() {
			console.log('component is mounted');
			this.setState({changedText: this.props.todo.text})
		}

		handleEditing(event) {
			this.setState({editing: true, changedText: this.props.todo.text})
		}

		handleEditingDone(event) {
			if (event.keyCode === 13) {
				this.setState({editing: false});
			}
		}

		handleEditingChange(event) {
			this.props.updateData(this.props.id, event.target.value);
		}

		removeTodo(id) {
			this.props.removeTodo(id);
		}

		RenderInput = () => {
			if (this.state.editing) {
				return (
					<input type="text"
						onChange={this.handleEditingChange.bind(this)}
						onKeyDown={this.handleEditingDone.bind(this)}
						value={this.props.todo.text}/>
				)
			} else {
				return (
					<div onDoubleClick={this.handleEditing.bind(this)}>
						<span style={{ textDecoration: this.props.todo.done ? 'line-through' :
					'none' }}>{this.props.todo.text}</span>
						<button className="completeTodo" onClick={() => this.props.handleClick(this.props.id)}>{this.props.todo.done ? 'Продлить' : 'Выполнено'}</button>
						<button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>Удалить</button>
					</div>
				)
			}
		}

		render() {
			return (
				<div className="todoWrapper">
					<this.RenderInput/>
				</div>
			)
		}
}