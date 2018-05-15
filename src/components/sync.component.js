import React, { Component } from 'react';

export default class Sync extends Component {
    render() {
        return (
            <div className="col-md-12 align-middle">
                <span class="col-md-6">
                    <button className="btn btn-info">Pull data down</button>
                </span>
                <span class="col-md-6">
                    <button className="btn btn-info">Push data up</button>
                </span>
            </div>
        )
    }
}