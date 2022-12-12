import mongoose from "mongoose";

export const processSchema = new mongoose.Schema({
  chat: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "TelegramChat"
  },
  application: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Process"
  },
  started_at: {
    type: Date,
    default: () => new Date,
    immutable: true
  },
  executed_at: {
    type: Date,
    default: () => new Date,
    immutable: true
  },
  executed_by: [{
    user: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User"
    }],
    field: {
      amount: Number,
      steps: {
        name: String,
        description: String
      }
    }
  }],
  status: {
    is_active: {
      type: Boolean,
      default: true
    },
    is_aborted: {
      type: Boolean,
      default: false
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
        default: false
      },
      field: Number
    },
    is_confirmed: {
      type: Boolean,
      default: false
    },
  }
})

export let Process = mongoose.model("Process", processSchema)