import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Tasks extends Component {

    render() {
        return (
            <div>
                <p>
                    While not necessary, I like the <code>NavLink</code> tags for navigating.
                </p>
                <br />
                <p>You can replace these with <code>{'<a href="/practice"></a>'}</code> or even
                <code>{'<button><a href="/practice"></a></button>'}</code> for maximum layout fun.</p>

                <br />
                <p>One side note, you can onlya ever return a single outer element in js. We are almost always returning div like so:</p>
                    <pre><code>
                        {`
                        render() {
                            return (
                                <div>
                                ...inner stuff here...
                                </div>
                            );
                        }
                        `}
                    </code></pre>
                    <p>We use <code>(</code> behind <code>return</code> to tell it to wrap multiple lines together.
                    However</p>
                <pre><code>
                        {
                            `
                            render() {
                                return (
                                    <h1>Title</h1>
                                    <div>body</div>
                                )
                            }
                            `
                    }
                </code></pre>
                <p>would not work becuase you can only return a single outer element.
                </p>

                <NavLink to="/practice/task">to practice</NavLink>
            </div>
        )
    }
}
