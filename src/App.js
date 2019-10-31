import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import fire from './fire';



class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = { messages: [] }; // <- set up react state
	}
	componentWillMount(){
	  /* Create reference to messages in Firebase Database */
	  let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
	  messagesRef.on('child_added', snapshot => {
		/* Update React state when message is added at Firebase Database */
		let message = { text: snapshot.val(), id: snapshot.key };
		this.setState({ messages: [message].concat(this.state.messages) });
	  })
	}
	addMessage(e){
	  e.preventDefault(); // <- prevent form submit from reloading the page
	  /* Send the message to Firebase */
	  fire.database().ref('messages').push( this.inputEl.value );
	  this.inputEl.value = ''; // <- clear the input
	}
	render() {
	  return (
		<form onSubmit={this.addMessage.bind(this)}>
		  <input type="text" ref={ el => this.inputEl = el }/>
		  <input type="submit"/>
		  <ul>
			{ /* Render the list of messages */
			  this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
			}
		  </ul>
		</form>
	  );
	}
  }
  
  export default App;




// // TODO: look at microsoft's react tools

// // let time = 50;


//  * @typedef {Class} App
//  * @property {Object<any>} props props are for inheritance (SPA)
//  * * props are imported from *above* into the current class
//  * * for example, you will import firebase from *App* into *Page1*
//  * 
//  */

// class App extends Component {

// 	// state;

// 	constructor(props) { // props are for inheritance (SPA)
// 		super(props); // just think of this as a way to create empty classwide vars for you and run render automatically
// 		/**
// 		 * @var
// 		 * defined in Component, imagine this as any other classwide variable. state is the variable name for variable that should update the page
// 		 * calling setState is necessary because state is the term for *the current state of the visible page*
// 		 */
// 		this.state = {
// 			time: 50,
// 			otherVar: 'test'
// 		};
// 	}

// 	testFun() {
// 		setTimeout(() => {
// 			if (this.state.time > 0) {
// 				let curTime = this.state.time;
// 				curTime -= 1;
// 				// who not do `this.state.time = curTime`
// 				this.setState(
// 					{
// 						time: curTime
// 					}
// 				);
// 				// setState is needed because we are dealing with the `state`
// 				// if a variable is changed, it won't just automatically show on the page
// 				// react needs to be told to rerend or "change it's state"
// 				this.testFun();
// 			}
// 		}, 1000);
// 	}

// 	render() {
// 		this.testFun();
// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 					{/* 
// 						squig bracket is how you replace a standard html string with a variable
// 					*/}
// 					{/* <img src="./logo.svg" className="App-logo" alt="logo" /> */}
// 					<img src={logo} className="App-logo" alt="logo" />
// 					<p>
// 						Edit <code>src/App.js</code> and save to reload.
// 					</p>
// 					<a
// 						className="App-link"
// 						href="https://reactjs.org"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 					>
// 						Learn React
// 					</a>
// 					<p>{this.state.time}</p>
// 					{/* instead of a new html file you just put it in like this */}
// 				</header>
// 			</div>
// 		);
// 	}
// }

// // const app1 = new App();
// // const app2 = new App();
// /** `this.` is used becuase `this` refers to the specific definition. */

// export default App;
