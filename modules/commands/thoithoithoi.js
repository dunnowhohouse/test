const fs = require("fs");
module.exports.config = {
name: "Mày đừng có mà bốc phét",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "NBSDESIGNERVN",
	description: "Mày đừng có mà bốc phét",
	commandCategory: "Không cần lệnh",
	usages: "Mày đừng có mà bốc phét",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("điêu")==0 || (event.body.indexOf("bốc phét")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/cache/thoithoithoi.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}