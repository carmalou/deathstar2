import React, { Component } from 'react';
import IndividualTrooper from './individual-troopers.component.js';

export default class Troopers extends Component {
    constructor() {
        super();
        this.state = {
            trooperData: []
        };
        this.GetTrooperData = this.GetTrooperData.bind(this);
        this.HandleCheckbox = this.HandleCheckbox.bind(this);
    }

    GetTrooperData() {
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

    HandleCheckbox(e) {
        var prevState = this.state.trooperData.splice(0);
        prevState[e.target.getAttribute('data-index')][e.target.name] = !prevState[e.target.getAttribute('data-index')][e.target.name];
        this.setState({
            trooperData: prevState
        });
    }

    componentWillMount() {
        this.GetTrooperData();
    }

    render() {
        return(
            <div>
                <ul className="list-group">
                    { this.state.trooperData.length > 0 ? this.state.trooperData.map((trooper, index) => <IndividualTrooper className="list-group-item" key={ trooper.name } trooper={ trooper } HandleCheckbox={ this.HandleCheckbox } index={ index } />) : 'Looks like you don\'t have any data! Head over to the sync page to pull data from the server!' }
                </ul>
            </div>
        )
    }
}