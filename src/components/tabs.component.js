import React, { Component } from 'react';

export default class Tabs extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={ this.props.handleClick('trooper') }>Troopers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={ this.props.handleClick('room') }>Rooms</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={ this.props.handleClick('sync') }>Sync</a>
                </li>
            </ul>
        )
    }
}