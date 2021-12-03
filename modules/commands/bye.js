const fs = require("fs");
module.exports.config = {
	name: "vĩnh biệt",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "NBSDESIGNERVN", 
	description: "Không",
	commandCategory: "Không cần lệnh",
	usages: "Vĩnh biệt cụ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("vĩnh biệt")==0 || (event.body.indexOf("Vĩnh biệt")==0 || (event.body.indexOf("xin vĩnh biệt")==0 || (event.body.indexOf("Bye")==0)))) {
		var msg = {
				body: "Xin vĩnh biệt cụ.",
				attachment: fs.createReadStream(__dirname + `/noprefix/vinhbietcu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}