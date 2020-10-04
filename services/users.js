const users = [];

const userJoin = (id, username, department) => {
	user = { id, username, department };

	users.push(user);
	return user;
};

const getCurrentUser = (id) => {
	return users.find((user) => user.id == id);
};
const userLeave = (id) => {
	const index = users.findIndex((user) => user.id === id);
	if (index !== -1) {
		return users.splice(index, 1)[0];
	}
};
//get room users

const getRoomUsers = (department) => {
	return users.filter((user) => user.department === department);
};
module.exports = {
	userJoin,
	getCurrentUser,
	getRoomUsers,
	userLeave,
};
