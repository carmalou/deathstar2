import React, { Component } from 'react';
import { addTroopersToList } from '../actions/indexeddb/addTroopers.js';
import { addRoomToList } from '../actions/indexeddb/addRooms.js';

export default class Sync extends Component {
    constructor() {
        super();
        this.state = {};
        this.getRooms = this.getRooms.bind(this);
        this.GetTrooperData = this.GetTrooperData.bind(this);
        this.PullInRooms = this.PullInRooms.bind(this);
        this.PullInTroopers = this.PullInTroopers.bind(this);
    }

    GetTrooperData() {
        // this needs to be redone to use indexeddb
        return window.fetch('https://carmalou.com/deathstar2/api/troopers.json')
        .then((rez) => {
            return rez.json();
        })
        .then((rez2) => {
            this.setState({
                trooperData: rez2
            })
        });
    }

    getRooms() {
        // this needs to be redone to use indexeddb
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

    PullInTroopers() {
        this.GetTrooperData()
            .then(() => {
                addTroopersToList(this.state.trooperData);
            });
    }

    PullInRooms() {
        this.getRooms()
            .then(() => {
                addRoomToList(this.state.rooms)
            });
    }

    render() {
        return (
            <div className="col-md-12">
                <span className="col-md-3">
                    <button className="btn btn-info">Pull room data down</button>
                </span>
                <span className="col-md-3">
                    <button className="btn btn-info">Pull trooper data down</button>
                </span>
                <span className="col-md-3">
                    <button className="btn btn-info">Push room data up</button>
                </span>
                <span className="col-md-3">
                    <button className="btn btn-info">Push trooper data up</button>
                </span>
            </div>
        )
    }
}