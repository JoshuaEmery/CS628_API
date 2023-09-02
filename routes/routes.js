const express = require("express");
const router = express.Router();

//import the controller
const {
  getPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
  seedPlayers,
} = require("../controllers/playerController");

//setup the routes using the controller
router.route("/").get(getPlayers).post(createPlayer);
router.route("/:id").get(getPlayerById).put(updatePlayer).delete(deletePlayer);
router.route("/seed").post(seedPlayers);

module.exports = router;
