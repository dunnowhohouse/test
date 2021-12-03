const fs = require("fs");
module.exports.config = {
	name: "ccyld",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "NBSDESIGNERVN", 
	description: "Không",
	commandCategory: "Không cần lệnh",
	usages: "Có chắc yêu là đây",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ccyld")==0 || (event.body.indexOf("có chắc yêu là đây")==0)) {
		var msg = {
				body: "Yêu chứ chắc gì nữa.",
				attachment: fs.createReadStream(__dirname + `/noprefix/ccyld.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}