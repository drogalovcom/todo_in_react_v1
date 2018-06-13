import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

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
			<section className="input">
                <Row>
                    <Col xs={12} sm={8} smOffset={2}>
                        <InputGroup className="input_section">
                            <FormControl bsSize="small" type="text" placeholder="Введите задачу"
                                         value={this.state.value}
                                         onChange={this.handleChange}
                            />
                            <DropdownButton bsSize="small" title="Добавить" id="bg-nested-dropdown">
                                <MenuItem bsSize="small" onClick={() => this.addTodoUn(this.state.value)}>В начало</MenuItem>
                                <MenuItem bsSize="small" onClick={() => this.addTodoCenter(this.state.value)}>В середину</MenuItem>
                                <MenuItem bsSize="small" onClick={() => this.addTodo(this.state.value)}>В конец</MenuItem>
                            </DropdownButton>
                        </InputGroup>
                    </Col>
                </Row>
			</section>
		);
	}
}