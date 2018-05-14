import React, { Component } from 'react';

export default class AddRoom extends Component {
    render() {
        return (
            <div className="form-inline col-md-4 offset-md-4">
                <label htmlFor="displayName">Room Name: &nbsp; </label>
                <input className="form-control mb-2 mr-sm-2" type="text" name="displayName"/>
                <button className="btn btn-primary mb-2">Add Room</button>
            </div>
        )
    }
}