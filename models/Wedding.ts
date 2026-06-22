import mongoose from "mongoose";

const WeddingSchema = new mongoose.Schema({
  brideName: {
    type: String,
    required: true,
  },

  groomName: {
    type: String,
    required: true,
  },

  weddingDate: {
    type: String,
    required: true,
  },

  venue: {
    type: String,
    required: true,
  },
});

const Wedding =
  mongoose.models.Wedding ||
  mongoose.model("Wedding", WeddingSchema);

export default Wedding;