import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Practice extends Component {
    render() {
        return (
            <div>
                <p>Here is where it is going to get fun!</p>
                <h2>NPM</h2>
                <p>I despise HTML tables. They common becuase of their widespread use many years ago, but have been made inferior by
                    <code>css flex</code>.
                </p>
                <p>While I have asked you to get to know flex, your project does require an actual table.</p>
                <p>So we are using Bootstrap's table.</p>
                <p><a href="https://react-bootstrap.github.io/components/table/">Here</a> is a link to the docs.</p>
                <p>In the future, you can follow the docs for installing Bootstrap in your projects.</p>
                <p>We will eventually theme everything and use botstrap more, but I wanted to start with the components:
                    <code>{'<Table>'}</code> and <code>{'<Button>'}</code> first
                </p>
                <h2>Props</h2>
                <p>With react you are going to need to get to know the <code>props</code></p>
                <p>Props are used to give values from higher level components to their children.</p>
                <p>On the next page we use the most advanced form of this:</p>
                <h3>Setting Props</h3>
                <p>You might remember the trouble of states. Becuase a value is dynamic, it should use <code>setState</code>.</p>
                <p>So what if you want to give a state variable to a child component?</p>
                <h4>Passing a functions</h4>
                <p>Becuase <code>setState</code> is relative to its class, we have to give the child a prop that is a function.</p>
                <p>This function runs <code>setState</code> in the parent and returns the parents state to the child.</p>
                <p>An example is line 117 of App.js</p>
                <h4>A little practice</h4>
                <p>Sending a state variable as a function isn't always necessary. We are going to initialize firebase in App.js and simply pass firebase to the children.</p>
                <p>So you can just pass the variable directly - not as a function. Do you think you could initialize firebase and have the pages call it?</p>
                <NavLink to="/practice/input">To Practice</NavLink>
            </div>
        )
    }
}
