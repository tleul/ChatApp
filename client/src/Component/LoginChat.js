import React from 'react';

import io from 'socket.io-client';
const socket = io('http://localhost:8000');
function LoginChat() {
	return (
		<div className='chat-box'>
			<h3>Nile Chat Support</h3>
			<form action='chatroom'>
				<div className='chat-login'>
					<div>
						<input type='text' placeholder='User Name' />
					</div>
					<div>
						<select name='Department' id=''>
							<option value='billing'>Billing</option>
							<option value='billing'>Shipping</option>
							<option value='billing'>Delivery</option>
							<option value='billing'>Other</option>
						</select>
					</div>
					<div>
						<input type='Submit' value='Join Chat' />
					</div>
				</div>
			</form>
		</div>
	);
}

export default LoginChat;
