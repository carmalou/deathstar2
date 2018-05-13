import React, { Component } from 'react';

export default class Rooms extends Component {
    constructor() {
        super();
        this.state = {
            rooms: []
        }
        this.getRooms = this.getRooms.bind(this);
    }

    getRooms() {
        this.setState({
            rooms: [
                {
                    keyName: 'trashCompactor',
                    displayName: 'Trash Compactor'
                },
                {
                    keyName: 'messHall',
                    displayName: 'Mess Hall'
                },
                {
                    keyName: 'landingStrip',
                    displayName: 'Landing Strip'
                },
                {
                    keyName: 'armory',
                    displayName: 'Armory'
                }
            ]
        })
    }

    componentDidMount() {
        this.getRooms();
    }

    render() {
        return(
            <div>
                <ul className="list-group">
                    { this.state.rooms.map(room => <li className="list-group-item" key={ room.keyName }>{ room.displayName }</li>) }
                </ul>
            </div>
        )
    }
}