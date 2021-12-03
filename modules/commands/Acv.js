const fs = require("fs");
module.exports.config = {
	name: "acv",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "NBSDESIGNERVN", 
	description: "Không",
	commandCategory: "Không cần lệnh",
	usages: "Anh đã từng cố gắng",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("acv")==0 || (event.body.indexOf("Acv")==0)) {
		var msg = {
				body: "Anh đã từng cố gắng vun đắp cho tình yêu chúng mình.",
				attachment: fs.createReadStream(__dirname + `/noprefix/acv.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}