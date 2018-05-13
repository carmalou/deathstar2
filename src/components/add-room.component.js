import React, { Component } from 'react';

export default class AddRoom extends Component {
    render() {
        return (
            <div className="form-inline">
                <label htmlFor="displayName">Room Name: </label>
                <input className="form-control mb-2 mr-sm-2" type="text" name="displayName"/>
                <button className="btn btn-primary mb-2">Add Room</button>
            </div>
        )
    }
}