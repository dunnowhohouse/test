module.exports.config = {
name: "ngực",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "NBSDESIGNERVN",
	description: "Kí ngực",
	commandCategory: "Không cần lệnh",
	usages: "Kí ngực",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngực")==0 || (event.body.indexOf("Ngực")==0)) {
		var msg = {
				body: "Yoooooo.",
				attachment: fs.createReadStream(__dirname + `/noprefix/kinguc.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}