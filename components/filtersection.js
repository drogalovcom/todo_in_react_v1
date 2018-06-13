import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';

export default class Filtersection extends React.Component {

    render() {
        return (
            <ToggleButtonGroup className="filter_items" type="radio" name="options" defaultValue={1}>
                <ToggleButton value={1} bsSize="xsmall" className={({'active': this.state.filter === 'all'})} onClick={() => this.updateFilter('all')}>Все: { this.state.todos.length }</ToggleButton>
                <ToggleButton value={2} bsSize="xsmall" className={({'active': this.state.filter === 'active'})} onClick={() => this.updateFilter('active')}>Активные: { this.state.todos.filter((todo) => {return !todo.done}).length}</ToggleButton>
                <ToggleButton value={3} bsSize="xsmall" className={({'active': this.state.filter === 'completed'})} onClick={() => this.updateFilter('completed')}>Выполненные: { this.state.todos.filter((todo) => {return todo.done}).length}</ToggleButton>
            </ToggleButtonGroup>
        )
    }
}