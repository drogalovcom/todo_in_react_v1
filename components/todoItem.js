import React from 'react';


export default class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { editing: false }
	}

	componentDidMount () {
		console.log('component is mounted');
		this.setState({ changedText: this.props.todo.text })
	}

	handleEditing (event) {
		this.setState({ editing: true, changedText: this.props.todo.text })
	}

	handleEditingDone (event) {
		console.log("iditing done");
		if (event.keyCode === 13) {
			this.setState({ editing: false });
		}
	}
	
	handleEditingChange (event) {
		var _changedText = event.target.value;
		this.setState({ changedText: _changedText });
	}

	removeTodo(id) {
    this.props.removeTodo(id);
  }

	render() {
		var viewStyle = {};
		var editStyle = {};

		if (this.state.editing) {
				viewStyle.display = "none";
		} else {
				editStyle.display = "none";
		}
		return (
			<div className="todoWrapper">
				<div style={viewStyle} onDoubleClick={this.handleEditing.bind(this)}>
					<span>{this.state.changedText}</span>
					<button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id)}>Удалить</button>
				</div>
				<input type="text" 
					onChange={this.handleEditingChange.bind(this)}
					onKeyDown={this.handleEditingDone.bind(this)}
					style={editStyle}
					value={this.state.changedText} />
			</div>
		)
	}
}