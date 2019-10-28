import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Instructions from './pages/instructions';
import Tasks from './pages/tasks';
import Practice from './pages/practice';
import Practice2 from './pages/practice2';
import Feedback from './pages/feedback';
import Report from './pages/report';

// TODO: look at microsoft's react tools

// let time = 50;

/**
 * @typedef {Class} App
 * @property {Object<any>} props props are for inheritance (SPA)
 * * props are imported from *above* into the current class
 * * for example, you will import firebase from *App* into *Page1*
 * 
 */

class App extends Component {

	// state;

	constructor(props) { // props are for inheritance (SPA)
		super(props); // just think of this as a way to create empty classwide vars for you and run render automatically
		/**
		 * @var
		 * defined in Component, imagine this as any other classwide variable. state is the variable name for variable that should update the page
		 * calling setState is necessary because state is the term for *the current state of the visible page*
		 */
		this.state = {
			time: 50,
            otherVar: 'test',
            practiceCorrect: 0
		};
    }
    
    /**
     * @function practiceCorrect becuase the number correct is dynamic we are using the state variable practiceCorrect
     * to allow for both the results page and input page to use this value, we insert it from a higher level
     * If we were using typescript, we would use something called a getter and setter
     * this functions does the same as a getter/setter by outputting the value and setting it
     * This is important becuase we can only use `setState` from this level, but we need to set the state from withing the component 
     * What I have done to mimic get/set is to only run `setState` if the param `p` is set. Either way, it returns the local `practiceCorrect`
     * @param {number} p the number of correct
     * @returns {number} the nnumber of correct
     */
    practiceCorrect = p => {
        if (p)
            this.setState({practiceCorrect: p});
        return this.state.practiceCorrect;
    }

	testFun() {
		setTimeout(() => {
			if (this.state.time > 0) {
				let curTime = this.state.time;
				curTime -= 1;
				// who not do `this.state.time = curTime`
				this.setState(
					{
						time: curTime
					}
				);
				// setState is needed because we are dealing with the `state`
				// if a variable is changed, it won't just automatically show on the page
				// react needs to be told to rerend or "change it's state"
				this.testFun();
			}
		}, 1000);
    }
    
    /**
     * @function justAnExample
     * this is an example of using functions in the render method
     * think about day 1 when we changed react to use classes instead of just functions.
     * here we are going back to using functions
     * 
     * Where classes will help you stay organized, there no need to create a new class for small things;
     * think about a layout you want to copy many times:
     * 
     * @example
     * anotherExample = (props) => {
     * return <input value={props.t} />
     * }
     * render() {
     * return <anotherExample t="value"/>
     * }
     * 
     * @param { Object<any> } props this is exactly the same as the class constructor's props
     * you can transfer values into the method. in this example we are inputting `correct` and in the above example we are inputting `t` 
     */
    justAnExample = (props) => {
        return (
            <Route path="/practice/report" component={Practice2}>
                <Report correct={props.cor}></Report>
            </Route>
        )
    }

	render() {
		this.testFun();
        return (
            // this is the react router. it takes in various attributes like path and component
            <Router>
                <div>
                    <Route exact path="/" component={Instructions}></Route>
                    <Route path="/tasks" component={Tasks}></Route>
                    <Route path="/practice/task" component={Practice}></Route>
                    <Route path="/practice/input" component={Practice2}>
                        <Practice2 correct={this.practiceCorrect}></Practice2>
                        {/* you can insert components directly into render like this */}
                        {/* While this example is used inside a route so we can access the `correct` prop... */}
                        {/* you can use this syntax outside of Routes as well, think of a menu */}
                    </Route>
                    <this.justAnExample cor={this.practiceCorrect}/>
                    {/* this is an an example of how you can use functions as well as classes to insert elements in the render */}
                    <Route path="/practice/feedback">
                        <Feedback correct={Practice} />
                    </Route>
                </div>
            </Router>
            // <view style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            //     <Text>Home Screen</Text>
            //     <Button
            //         title="Go to Details"
            //         onPress={() => this.props.navigation.navigate('Details')}
            //     />
            // </view>
			// <div className="App">
			// 	<header className="App-header">
			// 		{/* 
			// 			squig bracket is how you replace a standard html string with a variable
			// 		*/}
			// 		{/* <img src="./logo.svg" className="App-logo" alt="logo" /> */}
			// 		<img src={logo} className="App-logo" alt="logo" />
			// 		<p>
			// 			Edit <code>src/App.js</code> and save to reload.
			// 		</p>
			// 		<a
			// 			className="App-link"
			// 			href="https://reactjs.org"
			// 			target="_blank"
			// 			rel="noopener noreferrer"
			// 		>
			// 			Learn React
			// 		</a>
            //         <Page1 testp={'test'} />
			// 		<p>{this.state.time}</p>
			// 		{/* instead of a new html file you just put it in like this */}
			// 	</header>
			// </div>
		);
	}
}

// const app1 = new App();
// const app2 = new App();
/** `this.` is used becuase `this` refers to the specific definition. */

export default App;
