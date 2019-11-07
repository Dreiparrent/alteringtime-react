import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Report extends Component {

    /**
     * note all of constructor's properties are automatically accessable as `this.property`
     */

    constructor(props) {
        super(props);
        console.log(props.correct());
    }

    /**
     * In an effort to match the get/set format, we call the function `correct` input from the props
     */
    render() {
        return (
            <div>
                The number correct is {this.props.correct()}
                <br/>
                <NavLink to="/practice/feedback">To Feedback</NavLink>
            </div>
        )
    }
}
