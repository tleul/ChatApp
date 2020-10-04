import React, { Suspense } from 'react';

import './App.css';
import LoginChat from './Component/LoginChat';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const ChatRoom = React.lazy(() => import('./Component/ChatRoom'));
function App() {
	return (
		<Router>
			<div className='container'>
				<Route exact path='/' component={LoginChat} />
				<Suspense fallback={<div>Loadin ...</div>}>
					<Switch>
						<Route exact path='/chatroom' component={ChatRoom} />
					</Switch>
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
