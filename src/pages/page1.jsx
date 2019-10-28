import React, { Component } from 'react';
import './page1.css';

export default class Page1 extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <h1>This is page1</h1>
            </div>
        )
    }
}
