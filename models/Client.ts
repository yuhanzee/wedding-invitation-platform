import mongoose, { Schema } from "mongoose";

const ClientSchema = new Schema(
  {
    name: String,

    email: String,

    phone: String,

    package: {
      type: String,
      default: "Premium",
    },
  },
  {
    timestamps: true,
  }
);

export default
  mongoose.models.Client ||
  mongoose.model("Client", ClientSchema);