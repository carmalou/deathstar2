import React, { Component } from 'react';

export default class RoomAccess extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <ul className="list-group">
                <li className="list-group-item">Trash compactor <input type="checkbox" name="trashCompactorAccess" checked={ this.props.trooper.trashCompactorAccess } data-index={ this.props.index } onChange={ this.props.HandleCheckbox } /></li>
                <li className="list-group-item">Mess Hall <input type="checkbox" name="messHallAccess" checked={ this.props.trooper.messHallAccess } data-index={ this.props.index } onChange={ this.props.HandleCheckbox } /></li>
                <li className="list-group-item">Landing Strip <input type="checkbox" name="landingStripAccess" checked={ this.props.trooper.landingStripAccess } data-index={ this.props.index } onChange={ this.props.HandleCheckbox } /></li>
                <li className="list-group-item">Armory <input type="checkbox" name="armoryAccess" checked={ this.props.trooper.armoryAccess } data-index={ this.props.index } onChange={ this.props.HandleCheckbox } /></li>
            </ul>
        )
    }
}