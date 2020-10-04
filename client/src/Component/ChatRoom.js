import React,   from 'react';

import io from 'socket.io-client';
const socket = io('http://localhost:8000');
const ChatRoom = () => {
	socket.on('message', (message) => {
		console.log(message);
	});

	return (
		<>
			<div className='nav-bar'>
				<ul>
					<li>
						<h4>Nile Support</h4>
					</li>
					<li>
						<button>Leave Room</button>
					</li>
				</ul>
			</div>
			<div className='chat-board'>
				<div>
					<section>
						<p>Room Name:</p>
					</section>
					<section>
						<p>name room</p>
					</section>
					<section>
						<p>Users:</p>
						<section>
							<p>users name</p>
						</section>
					</section>
				</div>
				<div className='chat-text-messages'></div>
			</div>
		</>
	);
};

export default ChatRoom;
