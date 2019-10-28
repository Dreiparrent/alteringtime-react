import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import './practice2.css'

import { Table } from 'react-bootstrap';

export default class Practice2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: [
                [{ correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' },
                { correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' }],
                [{ correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' },
                { correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' }],
                [{ correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' },
                { correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' }],
                [{ correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' },
                { correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' }],
                [{ correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' },
                { correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' }],
                [{ correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' },
                { correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' }],
                [{ correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' },
                { correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' }],
                [{ correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' },
                { correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' }],
                [{ correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' },
                { correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' }],
                [{ correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' },
                { correct: 0, value: '' }, { correct: 0, value: '' }, { correct: 0, value: '' }]
            ]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(x, y, event) {
        const inps = this.state.inputs;
        inps[x][y].value = event.target.value;
        this.props.correct(5);
        // this.props.correct = 5;
        this.setState({ inputs: inps });
    }

    render() {
        /**
         * @function listItems this function takes all the inputs and lists them out in the DOM
         * Rather than write a table beforehand, we are letting react dynamically create one.s
         * Note, we are defining this function inside render so that `this.state.inputs` is valid.
         * I cannot tell you why but React has issues otherwise.
         * @returns {JSX.Element}
         */
        const listItems = this.state.inputs.map((pages, i) =>
            <tr key={i}>
                <td>Page {i}</td>
                {pages.map((page, j) =>
                    <td key={'inner' + j} className="listIn">
                        <input type="text" value={this.state.inputs[i][j].value} onChange={(e) => this.handleChange(i, j, e)} />
                    </td>
                )}
            </tr>
        );
        return (
            <div>
                <h1>test</h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Box 1</th>
                            <th>Box 2</th>
                            <th>Box 3</th>
                            <th>Box 4</th>
                            <th>Box 5</th>
                            <th>Box 6</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </Table>
                <NavLink to="/practice/report">To Feedback</NavLink>
            </div>
        )
    }
}
