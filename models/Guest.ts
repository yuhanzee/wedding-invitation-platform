import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema({
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
});

const Guest =
  mongoose.models.Guest ||
  mongoose.model("Guest", GuestSchema);

export default Guest;