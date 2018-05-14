import React, { Component } from 'react';
import AddRoom from './add-room.component.js';
import { addRoomToList } from '../actions/indexeddb/addRooms.js';

export default class Rooms extends Component {
    constructor() {
        super();
        this.state = {
            rooms: [],
            addRoom: false
        }
        this.getRooms = this.getRooms.bind(this);
        this.handleAddRoomClick = this.handleAddRoomClick.bind(this);
    }

    getRooms() {
        return window.fetch('https://carmalou.com/deathstar2/api/rooms.json')
        .then((rez) => {
            return rez.json();
        })
        .then((rez2) => {
            this.setState({
                rooms: rez2
            })
        });
    }

    handleAddRoomClick() {
        this.setState(function(previousState) {
            return { addRoom: !previousState.addRoom }
        })
    }
    
    componentWillMount() {
        this.getRooms()
            .then(() => {
                addRoomToList(this.state.rooms)
            });
    }

    render() {
        return(
            <div>
                <ul className="list-group">
                    { this.state.rooms.map(room => <li className="list-group-item" key={ room.keyName }>{ room.displayName }</li>) }
                    <li className="list-group-item">
                        <button className="btn btn-info" onClick={ this.handleAddRoomClick }>Add another room</button>
                        { this.state.addRoom ? <AddRoom /> : ''}
                    </li>
                </ul>
            </div>
        )
    }
}