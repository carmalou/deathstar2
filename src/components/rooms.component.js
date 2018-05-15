import React, { Component } from 'react';
import AddRoom from './add-room.component.js';

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
        // this needs to be redone to use indexeddb
        var open = window.indexedDB.open('deathstar2');
        open.onsuccess = (event) => {
            var db = event.target.result;
            db.transaction('rooms', 'readonly').objectStore('rooms').getAll().onsuccess = (event) => {
                this.setState({
                    rooms: event.target.result
                });
            };
        }
    }

    handleAddRoomClick() {
        this.setState(function(previousState) {
            return { addRoom: !previousState.addRoom }
        })
    }

    componentWillMount() {
        this.getRooms();
    }

    render() {
        return(
            <div>
                <ul className="list-group">
                    { this.state.rooms.length > 0 ? this.state.rooms.map(room => <li className="list-group-item" key={ room.keyName }>{ room.displayName }</li>) : 'Looks like you don\'t have any data! Head over to the sync page to pull data from the server!' }
                </ul>
            </div>
        )
    }
}