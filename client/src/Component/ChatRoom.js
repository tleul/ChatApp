import React, { useState } from 'react';
import qs from 'qs';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const ChatRoom = () => {
	const [sendmessage, setsendmessage] = useState('');

	const onchangehandler = (e) => setsendmessage(e.target.value);
	const sendhandler = () => {
		socket.emit('chatMessage', sendmessage);
		setsendmessage('');
		const textfield = document.querySelector('.chat-text');
		textfield.focus();
	};

	return (
		<>
			<div className='nav-bar'>
				<ul>
					<li>
						<h4>Nile Support</h4>
					</li>
					<li>
						<button>
							<span>Leave Room</span>
						</button>
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
							onKeyUp={(e) => {
								if (e.keyCode === 13) sendhandler();
							}}
							onChange={(e) => onchangehandler(e)}
							value={sendmessage}
							type='text'
						/>
						<input
							className='submit-button'
							onKeyUp={(e) => console.log(e)}
							onClick={sendhandler}
							value='send'
							type='submit'
						/>
					</div>
				</div>
			</div>
			<br />
		</>
	);
};
const { username, department } = qs.parse(window.location.search, {
	ignoreQueryPrefix: true,
});
//Join chatroom
socket.emit('joinRoom', { username, department });
socket.on('message2', (mess) => {
	console.log(mess);
	displayMessage(mess);
	const chatcontainer = document.querySelector('.chat-text-messages');
	chatcontainer.scrollTop = chatcontainer.scrollHeight;
});
const displayMessage = (mesg) => {
	console.log('heloo');
	const div = document.createElement('div');
	console.log(div);
	div.classList.add('message');
	div.innerHTML = `<p class=text-header>${mesg.username}<span>${mesg.time}</span> </p>  <p class='text'>${mesg.text}</p>`;
	document.querySelector('.chat-text-messages').appendChild(div);
};
export default ChatRoom;
