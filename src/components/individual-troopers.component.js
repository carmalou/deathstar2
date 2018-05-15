import React, { Component } from 'react';
import RoomAccess from './room-access.component.js';

export default class IndividualTrooper extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false
        }
        this.ToggleDetails = this.ToggleDetails.bind(this);
    }

    ToggleDetails() {
        this.setState(function(previousState) {
            return { toggle: !previousState.toggle }
        });
    }

    render() {
        return (
            <li className="list-group-item col-md-12" key={ this.props.trooper.name }>
                <span className="col-md-6">{ this.props.trooper.name }</span>
                <span className="col-md-6"><button onClick={ this.ToggleDetails } className="btn btn-info">{ this.state.toggle ? 'Hide Details' : 'Show Details' }</button></span>
                { this.state.toggle ? <RoomAccess trooper={ this.props.trooper } HandleCheckbox={ this.props.HandleCheckbox } index={ this.props.index } EditTrooper={ this.props.EditTrooperHandler } /> : '' }
            </li>
        )
    }
}