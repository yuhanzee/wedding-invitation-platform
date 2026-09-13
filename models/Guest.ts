// import mongoose from "mongoose";

// const GuestSchema = new mongoose.Schema({

//   weddingId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Wedding",
// },
//   guestName: {
//     type: String,
//     required: true,
//   },

//   familyCount: {
//     type: Number,
//     required: true,
//   },

//   token: {
//     type: String,
//     required: true,
//     unique: true,
//   },

//   attending: {
//     type: Boolean,
//     default: null
// },

// respondedAt: {
//     type: Date,
//     default: null
// },

// });

// const Guest =
//   mongoose.models.Guest ||
//   mongoose.model("Guest", GuestSchema);

// export default Guest;

import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema({
  weddingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wedding",
    required: true,
  },

  guestName: {
    type: String,
    required: true,
  },

  familyCount: {
    type: Number,
    required: true,
  },

  token: {
    type: String,
    required: true,
    unique: true,
  },

  // null = not responded
  // true = accepted
  // false = declined
  attending: {
    type: Boolean,
    default: null,
  },

  // Optional message/wish from guest
  message: {
    type: String,
    default: "",
    maxlength: 300,
  },

  // When RSVP was submitted
  respondedAt: {
    type: Date,
    default: null,
  },
});

const Guest =
  mongoose.models.Guest ||
  mongoose.model("Guest", GuestSchema);

export default Guest;