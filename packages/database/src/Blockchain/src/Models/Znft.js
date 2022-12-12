import mongoose from "mongoose";

export const zNFTs = {
  playlistSchema: new mongoose.Schema({
    "title": String,
    "description": String,
    "mood": [String],
    "tags": [String],
    "algorythmic": Boolean
  }),
  downloadableContent: new mongoose.Schema({
    "title": String,
    "description": String,
    "secret_url": String,
    "release_date": Date,
  }),
  digitalReport: new mongoose.Schema({
    "date": Date,
    "amount": Number,
    "currency": String,
    "report_file": String
  }),
  profile: new mongoose.Schema({

  }),
  copyright: new mongoose.Schema({

  }),
  entertainment: new mongoose.Schema({

  }),
  merchandise: new mongoose.Schema({

  }),
  equipment: new mongoose.Schema({

  }),
  studio: new mongoose.Schema({

  }),
  venues: new mongoose.Schema({

  }),
  roles: {
    performers: new mongoose.Schema({

    }),
    admin: new mongoose.Schema({

    }),
    copyright: new mongoose.Schema({

    }),
    tutoring: new mongoose.Schema({

    }),
    distribution: new mongoose.Schema({

    }),
    supply: new mongoose.Schema({

    })
  },
  nodes: new mongoose.Schema({

  }),
  applications: new mongoose.Schema({

  }),

}