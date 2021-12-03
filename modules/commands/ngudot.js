const fs = require("fs");
module.exports.config = {
name: "ngu dốt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "NBSDESIGNERVN",
	description: "Ngu dốt",
	commandCategory: "Không cần lệnh",
	usages: "Ngu dốt",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngu dốt")==0 || (event.body.indexOf("Ngu dốt")==0)) {
		var msg = {
				body: "Thằng này ngu lắm.",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngudot.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}