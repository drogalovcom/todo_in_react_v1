import React from 'react';


export default class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { editing: false }
	}

    handleEditing (event) {
	    this.setState({ editing: true })
    }

    handleEditingDone (event) {
	    console.log("iditing done");
	    if (event.keyCode ===13) {
	        this.setState({ editing: false });
        }
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
				<span style={viewStyle} onDoubleClick={this.handleEditing.bind(this)}>{this.props.todo.text}</span>
                <input type="text" onKeyDown={this.handleEditing.bind(this)} style={editStyle} value={this.state.changedText} />
				<button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id)}>Удалить</button>
			</div>
		)
	}
}