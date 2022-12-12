import mongoose from "mongoose";

export class TelegramFrom {
  constructor(telegramFrom) {
    let { id, is_bot, last_name, first_name, language_code, type } = telegramFrom
    this.id = id ? id : undefined
    this.is_bot = is_bot !== undefined ? is_bot : undefined
    this.last_name = last_name ? last_name : undefined
    this.first_name = first_name ? first_name : undefined
    this.language_code = language_code ? language_code : undefined
  }
  async saveToDb() {
    return await TelegramFromDoc.create(this)
  }
  async existsById() {
    return new Promise(async (res, rej) => {
      await TelegramFromDoc.exists({ id: this.id }) ?
        res(true) :
        res(false)
    })
  }
  log() {
    console.log(this);
  }
}
export let telegramFromSchema = new mongoose.Schema({
  id: Number,
  is_bot: Boolean,
  first_name: String,
  last_name: String,
  username: String,
  language_code: String,
  type: String
})
telegramFromSchema.loadClass(TelegramFrom)
export let TelegramFromDoc = mongoose.model("Telegram From", telegramFromSchema)

export class TelegramChat {
  constructor(telegramChat) {
    let { id, first_name, last_name, username, title, type } = telegramChat
    this.id = id ? id : undefined
    this.first_name = first_name ? first_name : undefined
    this.last_name = last_name ? last_name : undefined
    this.username = username ? username : undefined
    this.title = title ? title : undefined
    this.type = type ? type : undefined
  }
  async saveToDb() {
    return await TelegramChatDoc.create(this)
  }
  async existsById() {
    return new Promise(async(res, rej)=>{
      await TelegramChatDoc.exists({id: this.id}) ?
      res(true) :
      res(false)
    })
  }
  log(){
    return console.log(this)
  }
  async getDoc(){
    return TelegramChatDoc.findOne({id:this.id})
  }
}
export let telegramChatSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  username: String,
  title: String,
  type: String
})
telegramChatSchema.loadClass(TelegramChat)
export let TelegramChatDoc = mongoose.model("Telegram Chat", telegramChatSchema)

export let telegramMessageSchema = new mongoose.Schema({
  message_id: Number,
  from: {
    id: Number,
    is_bot: Boolean,
    first_name: String,
    last_name: String,
    username: String,
    language_code: String
  },
  chat: {
    id: Number,
    first_name: String,
    last_name: String,
    username: String,
    type: String
  },
  date: Date,
  text: String
})
export let TelegramMessage = mongoose.model("Telegram Message", telegramMessageSchema)

export let telegramBotInfoSchema = mongoose.Schema({
  id: Number,
  is_bot: Boolean,
  first_name: String,
  username: String,
  can_join_groups: Boolean,
  can_read_all_group_messages: Boolean,
  supports_inline_queries: Boolean
})
export let TelegramBotInfo = mongoose.model("Telegram Bot Info", telegramBotInfoSchema)

export let telegramUpdateSchema = mongoose.Schema({
  udpate_id: Number,
  message: {
    message_id: Number,
    from: {
      id: Number,
      is_bot: Boolean,
      first_name: String,
      last_name: String,
      username: String,
      language_code: String
    },
    chat: {
      id: Number,
      first_name: String,
      last_name: String,
      username: String,
      type: String
    },
    date: Date,
    text: String
  },
  tg: {
    token: String,
    responde: Object,
    options: {
      apiRoot: {},
      apiMode: {},
      webhookReply: {},
      agent: {
        _events: {},
        _eventsCount: {},
        _maxListeners: {},
        dafaultPort: {},
        protocol: {},
        options: {},
        requests: {},
        sockets: {},
        freeSockets: {},
        keepAliveMsecs: {},
        keepAlive: {},
        maxSockets: {},
        maxFreeSockets: {},
        maxTotalSockets: {},
        totalSocketsCount: {},
        scheduling: {},
        maxCachedSession: {},
        _sessionChache: {},
      },
      attachementAgent: {},
    }
  },
  botInfo: {
    id: Number,
    is_bot: Boolean,
    first_name: String,
    username: String,
    can_join_groups: Boolean,
    can_read_all_group_messages: Boolean,
    supports_inline_queries: Boolean
  },
  state: String
})
export let TelegramUpdate = mongoose.model("Telegram Updates", telegramUpdateSchema)
