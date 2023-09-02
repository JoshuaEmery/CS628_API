//here we define the schema for the record model
const mongoose = require("mongoose");
//defininng the record model
const playerSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required"],
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
    },
    image_url: {
      type: String,
      required: [true, "Image URL is required"],
    },
    mlb_team: {
      type: String,
      required: [true, "MLB team is required"],
    },
    player_rating: {
      type: Number,
      required: [true, "Player rating is required"],
    },
    max_hr_distance: {
      type: String,
      required: [true, "Max HR distance is required"],
    },
    avg_hr_distance: {
      type: String,
      required: [true, "Avg HR distance is required"],
    },
    max_exit_velocity: {
      type: String,
      required: [true, "Max exit velocity is required"],
    },
    avg_exit_velocity: {
      type: String,
      required: [true, "Avg exit velocity is required"],
    },
    player_id: {
      type: String,
      required: [true, "Player ID is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Player", playerSchema);
