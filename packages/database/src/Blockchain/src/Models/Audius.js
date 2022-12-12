import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  "album_count": Number,
  "bio": String,
  "cover_photo": {},
  "followee_count": Number,
  "follower_count": Number,
  "handle": String,
  "id": String,
  "is_verified": Boolean,
  "location": String,
  "name": String,
  "playlist_count": Number,
  "profile_picture": {},
  "repost_count": Number,
  "track_count": Number,
  "favourite_tracks": [{}],
  "reposts": [{}],
  "most_used_tags": [],
  "tracks": []
})

const repostSchema = new mongoose.Schema({
  "timestamp": String,
  "item_type": {},
  "item": {}
})

const favoriteTrackSchema = new mongoose.Schema({
  "favorite_item_id": String,
  "favorite_type": String,
  "user_id": String
})

const mostUsedTagsSchema = new mongoose.Schema({
  String
})

const trackSchema = new mongoose.Schema({
  "artwork": {},
  "description": String,
  "genre": String,
  "id": String,
  "mood": String,
  "release_date": String,
  "remix_of": {
    "tracks": [
      {
        "parent_track_id": String
      }
    ]
  },
  "repost_count": Number,
  "favorite_count": Number,
  "tags": String,
  "title": String,
  "user": {},
  "duration": Number,
  "downloadable": Boolean,
  "play_count": Number
})

/// PLAYLIST

const playlistSchema = new mongoose.Schema({
  "artwork": {},
  "description": String,
  "id": String,
  "is_album": Boolean,
  "playlist_name": String,
  "repost_count": Number,
  "favorite_count": Number,
  "user": {}
})

/// ARTWORK

const artworkSchema = new mongoose.Schema({
  "150x150": URL,
  "480x480": URL,
  "1000x1000": URL
})

const profilePictureSchema = new mongoose.Schema({
  "150x150": URL,
  "480x480": URL,
  "1000x1000": URL
})

const coverPhotoSchema = new mongoose.Schema({
  "640x": URL,
  "2000x": URL
})

/// METRICS

const metricSchema = new mongoose.Schema({
  "count": Number,
  "name": String
})