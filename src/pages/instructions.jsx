import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';

class Instructions extends Component {

    // constructor(props) {
    //     super(props);
    //     // trst
    // }

    render() {
        return (
            <div>
                <h1>Instructions</h1>
                <p>
                    While I haven't added the real instructions, I hove some notes.
                </p>
                <h3>Imports</h3>
                <p>Take a look at the new App.js. It now has this at the top:</p>
                    <pre><code>{`
                    import { Route, BrowserRouter as Router } from 'react-router-dom';
                    import './App.css';
                    import 'bootstrap/dist/css/bootstrap.min.css';
                    import Instructions from './pages/instructions';
                    ...other pages here as well...
                    `}</code></pre>
                <p>With react, you can simply import the css in the document. The router and pages are also being imported.</p>
                <h3>Some General Catching Up</h3>

                <h4>Attributes</h4>
                <p>An attribute is what is used inside a tag:</p>
                <pre><code>{`
                    <Route exact path="/" component={Instructions}></Route>
                `}
                </code></pre>
                <ol>
                    <li><code>{'<Route'}</code> - the tag name</li>
                    <li><code>{'exact'}</code> - an attribute. If not followed by an equals sign, this means it is a boolean toggle</li>
                    <ul><li><code>{'exact={true}'}</code> - for reference, this is acceptable</li></ul>
                    <li><code>{'path'}</code> - an attribute. if not followed by <code>{'{'}</code> the value is read as a string</li>
                    <li><code>{'component'}</code> - an attribute. This is the imported Instructions class or component</li>
                </ol>
                <h4>Other Nonsense</h4>
                <h5>ifs</h5>
                <p>While I've been avoiding it, please note that</p>
                    <pre><code>{`
                        if (condition)
                           statement 
                    `}</code></pre>
                    is the same as
                    <pre><code>{`
                        if (condition) {
                            statement
                        }
                    `}</code></pre>
                <p>but you can only drop the <code>{'{'}</code>, when the following statement is one line.</p>
                <h5>backtick</h5>
                <p>I would also like to focus on `. This is a special kind of string that has two purposes:</p>
                <ol>
                    <li> The most common usage is this:
                        <pre><code>{`
                            const example = 5;
                            const exampleString = \`This is an example: \${example}\`;
                            console.log(exampleString); // This is an example 5 
                        `}</code></pre>
                        Where {'${}'} will parse any variable into your string.
                    </li>
                    <li> It is also capable of multi-line strings. I use this in most of the code blocks becuase a normal
                        &nbsp;<code>'</code> or <code>"</code> cannot span multiple lines.</li>
                </ol>
                
                <h3>Router</h3>
                <p>Routing is a general vocab term for handeling urls. No need to get too in depth, but I have written some information for you in the code.</p>
                <p>This page is navigated by the router and it requires the <code>exact</code> attribute.
                You can remove this attribute to see what I mean.</p>
                <p>Head to the next page for more:)</p>
                <NavLink to="/tasks">To Tasks</NavLink>
                <br/>
            </div>
        )
    }
}
export default Instructions;