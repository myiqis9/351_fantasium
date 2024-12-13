class TradeReply {
    constructor(json) {
        this.id = json.id;
        this.creator = json.creator;
        this.reply = json.reply;
        this.creatoroffer = json.creatoroffer;
        this.replyoffer = json.replyoffer;
    }
}