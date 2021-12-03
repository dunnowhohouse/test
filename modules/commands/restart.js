module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NBSDESIGNERVN",
	description: "Khởi động lại",
	commandCategory: "Gạch chéo",
	usages: "Khởi động lại",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`Khởi động lại thành công.`, threadID, () => process.exit(1));
}