import mongoose from 'mongoose';

let dateSchema = new mongoose.Schema({
  id: String,
  created_at: {
    type: Date,
    default: () => new Date(),
  },
});

export let DateField = mongoose.model('Date', dateSchema);
