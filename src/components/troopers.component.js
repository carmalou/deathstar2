import React, { Component } from 'react';

export default class Troopers extends Component {
    constructor() {
        super();
        this.state = {
            trooperData: []
        };
        this.GetTrooperData = this.GetTrooperData.bind(this);
    }

    GetTrooperData() {
        this.setState({
            trooperData: [
                {
                    name: 'Sally Trooper',
                    trashCompactorAccess: true,
                    messHallAccess: true,
                    landingStripAccess: false,
                    armoryAccess: true
                },
                {
                    name: 'Barry Trooper',
                    trashCompactorAccess: true,
                    messHallAccess: true,
                    landingStripAccess: false,
                    armoryAccess: true
                },
                {
                    name: 'Larry Trooper',
                    trashCompactorAccess: false,
                    messHallAccess: true,
                    landingStripAccess: true,
                    armoryAccess: true
                },
                {
                    name: 'Traitor Trooper',
                    trashCompactorAccess: true,
                    messHallAccess: false,
                    landingStripAccess: false,
                    armoryAccess: false
                }
            ]
        });
    }

    componentDidMount() {
        this.GetTrooperData();
    }

    render() {
        return(
            <div>
                <ul className="list-group">
                    { this.state.trooperData.map(trooper => <li className="list-group-item" key={ trooper.name }>{ trooper.name }</li>) }
                </ul>
            </div>
        )
    }
}