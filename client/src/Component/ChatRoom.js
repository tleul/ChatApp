import React, { useState } from 'react';

import io from 'socket.io-client';

const socket = io('http://localhost:8000');
const ChatRoom = () => {
	let message = '';
	socket.on('message2', (mess) => {
		displayMessage(mess);
	});

	const displayMessage = (mesg) => {
		console.log('heloo');
		const div = document.createElement('div');
		console.log(div);
		div.classList.add('message');
		div.innerHTML = `<p>${mesg}</p>`;
		document.querySelector('.chat-text-messages').appendChild(div);
	};
	const onchangehandler = (e) => (message = e.target.value);
	const sendhandler = () => {
		socket.emit('chatMessage', message);
	};
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
				<div className='chat-board-group'>
					<div className='chat-text-messages'></div>

					<div>
						<input
							className='chat-text'
							onChange={(e) => onchangehandler(e)}
							type='text'
						/>
						<input
							onClick={sendhandler}
							value='send'
							type='submit'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChatRoom;
