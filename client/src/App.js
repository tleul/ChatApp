import React from 'react';

import './App.css';
import LoginChat from './Component/LoginChat';
import ChatRoom from './Component/ChatRoom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='container'>
				<Route exact path='/' component={LoginChat} />
				<Route exact path='/chatroom' component={ChatRoom} />
			</div>
		</Router>
	);
}

export default App;
