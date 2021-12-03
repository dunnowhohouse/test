const fs = require("fs");
module.exports.config = {
name: "pai",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "NBSDESIGNERVN",
	description: "Ngủ",
	commandCategory: "Không cần lệnh",
	usages: "Ngủ",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngủ")==0 || (event.body.indexOf("Ngủ")==0) || (event.body.indexOf("sleep")==0) || (event.body.indexOf("Sleep")==0) || (event.body.indexOf("Đi ngủ")==0) || (event.body.indexOf("đi ngủ")==0)) {
		var msg = {
				body: "Cậu ngủ ngon đi nhé.\nI miss you so much.\nHẹn gặp lại cậu vào sáng mai nha.",
				attachment: fs.createReadStream(__dirname + `/noprefix/sleep.gif`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}