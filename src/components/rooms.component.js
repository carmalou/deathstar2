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
        window.fetch('https://carmalou.com/deathstar2/api/rooms.json')
        .then((rez) => {
            return rez.json();
        })
        .then((rez2) => {
            this.setState({
                rooms: rez2
            })
        });
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