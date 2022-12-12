import mongoose from 'mongoose';
import { ZionError } from '../Classes/Standard Classes/ZionError.js';

export class Test {
  constructor(application, chat, from) {
    this.application = application;
    this.chat = chat;
    this.from = from;
    this.started_at = () => new Date();
    this.execution = {
      executed_by: [
        {
          user,
          field,
          executed_at,
        },
      ],
    };
    this.status = {
      is_active,
      is_aborted,
      suspension: {
        is_suspended,
        suspension_mess_id,
      },
      listening: {
        is_listening,
        field,
      },
      is_confirmed,
    };
  }
  log() {
    return console.log(this);
  }
  async saveToDb() {
    return await TestDoc.create(this);
  }
  async existsActiveTestOfThisChatForThisApplication() {
    return new Promise(async (res, rej) => {
      (await TestDoc.where({ chat: this.chat }).and({
        application: this.application,
        status: {
          is_active: true,
          is_aborted: false,
          is_suspended: false,
        },
      }))
        ? res(true)
        : res(false);
    });
  }
  async isTestListeningField(field) {
    return new Promise(async (res, rej) => {
      (await TestDoc.where({
        application: this.application,
      }).and({
        status: {
          listening: { is_listening: true, field: field },
        },
      }))
        ? res(true)
        : rej(new ZionError('This chat '));
    });
  }
  /**
   * @param {number} field
   */
  set listeningField(field) {
    return (this.status.listening.field = field);
  }

  /**
   * @param {boolean} value
   */
  set isListening(value) {
    return (this.status.listening.is_listening = value);
  }

  /**
   * @param {boolean} value
   */
  set isActive(value) {
    return (this.status.is_active = value);
  }

  /**
   * @param {boolean} value
   */
  set isConfirmed(value) {
    return (this.status.is_confirmed = value);
  }

  /**
   * @param {boolean} value
   */
  set isSuspended(value) {
    return (this.status.is_suspended = value);
  }

  /**
   * @param {boolean} value
   */
  set isAborted(value) {
    return (this.status.is_aborted = value);
  }
}

export const testSchema = new mongoose.Schema({
  chat: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'TelegramChat',
  },
  application: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Process',
  },
  started_at: {
    type: Date,
    default: () => new Date(),
    immutable: true,
  },
  execution: {
    field_being_executed: Number,
    executed_by: [
      {
        user: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: 'User',
        },
        field: {
          name: String,
          description: String,
        },
        executed_at: {
          type: Date,
          default: () => new Date(),
          immutable: true,
        },
      },
    ],
  },
  status: {
    is_active: {
      type: Boolean,
      default: true,
    },
    is_aborted: {
      type: Boolean,
      default: false,
    },
    suspension: {
      is_suspended: {
        type: Boolean,
        default: false,
      },
      suspension_mess_id: Number,
    },
    listening: {
      is_listening: {
        type: Boolean,
        default: false,
      },
      field: Number,
    },
    is_confirmed: {
      type: Boolean,
      default: false,
    },
  },
});
testSchema.loadClass(Test);
export let TestDoc = mongoose.model('Test', testSchema);
