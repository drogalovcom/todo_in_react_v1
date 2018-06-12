import React from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import FormControl from 'react-bootstrap/lib/FormControl';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';


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
					<FormControl type="text"
						onChange={this.handleEditingChange.bind(this)}
						onKeyDown={this.handleEditingDone.bind(this)}
						value={this.props.todo.text}/>
				)
			} else {
				return (
					<div onDoubleClick={this.handleEditing.bind(this)}>
						<Row>
							<Col xs={1}>
								<span onClick={() => this.props.handleClick(this.props.id)}>
									{this.props.todo.done ? <i className="material-icons">loop</i> : <i className="material-icons">check</i>}
                            	</span>
							</Col>
                            <Col xs={10}>
							<span className="title_item" style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none' }}>{this.props.todo.text}</span>
                            </Col>
                            <Col xs={1} className="buttons_item">
								<span onClick={(e) => this.removeTodo(this.props.id)}><i className="material-icons">
                                    clear
                                </i></span>
                            </Col>
						</Row>
					</div>
				)
			}
		}

		render() {
			return (
				<ListGroupItem className="todoWrapper">
					<this.RenderInput/>
				</ListGroupItem>
			)
		}
}