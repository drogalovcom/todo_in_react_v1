import React from 'react';

export default class Filtersection extends React.Component {
    render() {
        return (
            <div className="filtersection" style={{ padding: '20px' }}>
                <button className="btn btn-primary" onClick={() => this.props.handleClick(this.props.id)}>Все</button>
                <button className="btn btn-primary" onClick={() => this.addTodoCenter(this.state.value)}>Выполненные</button>
                <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Нужно выполнить</button>
            </div>
        )
    }
}