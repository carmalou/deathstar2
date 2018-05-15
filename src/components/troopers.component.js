import React, { Component } from 'react';
import IndividualTrooper from './individual-troopers.component.js';

export default class Troopers extends Component {
    constructor() {
        super();
        this.state = {
            trooperData: []
        };
        this.GetTrooperData = this.GetTrooperData.bind(this);
    }

    GetTrooperData() {
        // this needs to be redone to use indexeddb
        var open = window.indexedDB.open('deathstar2');
        open.onsuccess = (event) => {
            var db = event.target.result;
            db.transaction('stormtroopers', 'readonly').objectStore('stormtroopers').getAll().onsuccess = (event) => {
                this.setState({
                    trooperData: event.target.result
                });
            };
        }
    }

    componentWillMount() {
        this.GetTrooperData();
    }

    render() {
        return(
            <div>
                <ul className="list-group">
                    { this.state.trooperData.map(trooper => <IndividualTrooper className="list-group-item" key={ trooper.name } trooper={ trooper } />) }
                </ul>
            </div>
        )
    }
}