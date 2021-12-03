module.exports.config = {
	name: "adm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NBSDESIGNERVN",
	description: "Thông tin người điều hành bot",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Thông tin người điều hành bot:
Facebook: /nbsdesignervn
ID: 542887996
Giới tính: Men, Rất Men, Mạnh Mẽ`, event.threadID, event.messageID);