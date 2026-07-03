import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema(
  {
    guestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest",
    },

    guestName: {
      type: String,
      required: true,
    },

    action: {
      type: String,
      enum: ["Accepted", "Declined"],
      required: true,
    },

    weddingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wedding",
    },

    respondedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Activity ||
  mongoose.model("Activity", ActivitySchema);