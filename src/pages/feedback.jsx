import React, { Component } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import './feedback.css';

export default class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exciting: 4,
            interesting: 4,
            fun: 1
        }
        console.log(props);
        /**
         * {
         *  correct: 10 
         *  urlPath=: "practice"
         *  anotherProp: false
         * }
         */
    }

    /**
     * in this render, we are using bootstrap's `ToggleButtonGroup`.
     * I would be lying if I told you this was a cakewalk so don't worry if it seems confusing.
     * It was mostly reading bootstrap's docs and stackoverflow.
     * I also added some css to make it look a little better
     */
    render() {
        return (
            <div className="outer">
                <h3>How would you describe the task</h3>
                <ToggleButtonGroup name="exciting" className="buttonGroup"
                    value={this.state.exciting} onChange={e => this.setState({ exciting: e })}>
                    <ToggleButton type="radio" value={0}>Extremely Exciting</ToggleButton>
                    <ToggleButton type="radio" value={1}>Quite</ToggleButton>
                    <ToggleButton type="radio" value={2}>Slightly</ToggleButton>
                    <ToggleButton type="radio" value={3}>Neither</ToggleButton>
                    <ToggleButton type="radio" value={4}>Slightly</ToggleButton>
                    <ToggleButton type="radio" value={5}>Quite</ToggleButton>
                    <ToggleButton type="radio" value={6}>Extremely Dull</ToggleButton>
                </ToggleButtonGroup >
                <p>{this.state.exciting}</p>
                <ToggleButtonGroup name="interesting" className="buttonGroup"
                    value={this.state.interesting} onChange={e => this.setState({ interesting: e })} >
                    <ToggleButton value={0}>Extremely Interesting</ToggleButton>
                    <ToggleButton value={1}>Quite</ToggleButton>
                    <ToggleButton value={2}>Slightly</ToggleButton>
                    <ToggleButton value={3}>Neither</ToggleButton>
                    <ToggleButton value={4}>Slightly</ToggleButton>
                    <ToggleButton value={5}>Quite</ToggleButton>
                    <ToggleButton value={6}>Extremely Boring</ToggleButton>
                </ToggleButtonGroup >
                <p>{this.state.interesting}</p>
                <ToggleButtonGroup name="fun" className="buttonGroup"
                    value={this.state.fun} onChange={e => this.setState({ fun: e })} >
                    <ToggleButton value={0}>Extremely Fun</ToggleButton>
                    <ToggleButton value={1}>Quite</ToggleButton>
                    <ToggleButton value={2}>Slightly</ToggleButton>
                    <ToggleButton value={3}>Neither</ToggleButton>
                    <ToggleButton value={4}>Slightly</ToggleButton>
                    <ToggleButton value={5}>Quite</ToggleButton>
                    <ToggleButton value={6}>Extremely Tedius</ToggleButton>
                </ToggleButtonGroup  >
                <p>{this.state.fun}</p>
            </div>
        )
    }
}
