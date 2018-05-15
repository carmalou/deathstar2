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