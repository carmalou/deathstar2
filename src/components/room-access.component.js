import React, { Component } from 'react';

export default class RoomAccess extends Component {
    render() {
        return(
            <ul className="list-group">
                <li className="list-group-item">Trash compactor <input type="checkbox" checked={ this.props.trooper.trashCompactorAccess } /></li>
                <li className="list-group-item">Mess Hall <input type="checkbox" checked={ this.props.trooper.messHallAccess } /></li>
                <li className="list-group-item">Landing Strip <input type="checkbox" checked={ this.props.trooper.landingStripAccess } /></li>
                <li className="list-group-item">Armory <input type="checkbox" checked={ this.props.trooper.armoryAccess } /></li>
            </ul>
        )
    }
}