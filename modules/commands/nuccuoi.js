const fs = require("fs");
module.exports.config = {
name: "nực cười",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "NBSDESIGNERVN",
	description: "Nực cười",
	commandCategory: "Không cần lệnh",
	usages: "Nực cười",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bạn nói thật là nực cười")==0 || (event.body.indexOf("nực cười")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/cache/nuccuoi.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}