import React from 'react';

function LoginChat() {
	return (
		<div className='chat-box'>
			<h3>Nile Chat Support</h3>
			<form action='chatroom'>
				<div className='chat-login'>
					<div>
						<input
							name='username'
							type='text'
							placeholder='User Name'
						/>
					</div>
					<div>
						<select name='department' id=''>
							<option value='billing'>Billing</option>
							<option value='shipping'>Shipping</option>
							<option value='delivery'>Delivery</option>
							<option value='other'>Other</option>
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
