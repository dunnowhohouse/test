const fs = require("fs");
module.exports.config = {
name: "tham lam",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "NBSDESIGNERVN",
	description: "Tham lam",
	commandCategory: "Không cần lệnh",
	usages: "Tham lam",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tham lam")==0 || (event.body.indexOf("Tham lam")==0)) {
		var msg = {
				body: "Tham lam vãi lồn.",
				attachment: fs.createReadStream(__dirname + `/noprefix/thamlam.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}