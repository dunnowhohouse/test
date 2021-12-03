const fs = require("fs");
module.exports.config = {
	name: "ảo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "NBSDESIGNERVN", 
	description: "Không",
	commandCategory: "Không cần lệnh",
	usages: "Ảo cái lồn chứ ảo suốt ngày ảo ảo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ảo")==0 || (event.body.indexOf("Ảo")==0)) {
		var msg = {
				body: "Ảo con mẹ mày suốt ngày ảo.",
				attachment: fs.createReadStream(__dirname + `/noprefix/aothatday.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}