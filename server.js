const express = require('express');
const http = require('http');
const { get } = require('https');
const app = express();
const socketio = require('socket.io');
const server = http.createServer(app);
const PORT = 8000 || process.env.PORT;
const io = socketio(server);
const formatMessage = require('./services/formatmessage');
const {
	userJoin,
	getCurrentUser,
	userLeave,
	getRoomUsers,
} = require('./services/users');

//Run when client connects
io.on('connection', (socket) => {
	console.log('New WS Connection ....');

	//Jpin room
	socket.on('joinRoom', ({ username, department }) => {
		const user = userJoin(socket.id, username, department);

		socket.join(user.department);
		//Welcome Current user
		socket.emit(
			'message2',
			formatMessage(
				'Nile Bot',
				`Hey ${user.username} Welcome to Chat Support`,
			),
		);
		socket.broadcast.to(user.department).emit(
			//Broad when a user connects
			'message2',
			formatMessage(username, `${user.username} Joined the chat`),
		); //Listen for chatMessage
		socket.on('chatMessage', (msg) => {
			const user = getCurrentUser(socket.id);
			io.to(user.room).emit(
				'message2',
				formatMessage(user.username, msg),
			);
		});
	});

	// Runs when client disconnects

	socket.on('disconnect', () => {
		const user = userLeave(socket.id);
		if (user) {
			io.to(user.department).emit(
				'message2',
				formatMessage('Nile Bot', `${user.username} has left the chat`),
			);
		}
	});
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
