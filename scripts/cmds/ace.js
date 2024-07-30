module.exports = {
  config: {
    name: "link",
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: {
      en: ".",
    },
    category: "media",
    guide: {
      en: "{prefix} <reply with img or vid>",
    },
  },

  onStart: async function ({ api, event, getText }) {
    const { messageReply } = event;

    if (event.type !== "message_reply" || !messageReply.attachments || messageReply.attachments.length !== 1) {
      return api.sendMessage(getText("invalidFormat"), event.threadID, event.messageID);
    }

    return api.sendMessage(messageReply.attachments[0].url, event.threadID, event.messageID);
  }
};
