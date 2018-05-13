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
            <li className="list-group-item" key={ this.props.trooper.name }>
                <span>{ this.props.trooper.name }</span>
                <span><button onClick={ this.ToggleDetails }>Show Details</button></span>
                { this.state.toggle ? <RoomAccess trooper={ this.props.trooper } /> : '' }
            </li>
        )
    }
}