import mongoose from "mongoose";

const WeddingSchema = new mongoose.Schema({

 weddingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wedding",
    },

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

  weddingTime: {
  type: String,
  required: false,
},

  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
},

});

const Wedding =
  mongoose.models.Wedding ||
  mongoose.model("Wedding", WeddingSchema);

export default Wedding;