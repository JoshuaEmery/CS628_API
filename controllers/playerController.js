const asyncHandler = require("express-async-handler");
const playerData = require("../config/data");
//it is good practice to create a controller with CRUD functionality
//this methods will be called by the router
//import the model
const Player = require("../models/playerModel");
//this Model contains all of the built in Mongo methods for
//crud operations

//get all players
//GET API/RECORDS
const getPlayers = asyncHandler(async (req, res) => {
  //get all players using mongoose
  const players = await Player.find();
  res.status(200).json(players);
});

//get player by id
//GET API/RECORDS/:id
const getPlayerById = asyncHandler(async (req, res) => {
  //get one player by id. First check to see ID has a value
  //check to make sure an id was passed
  if (!req.params.id) {
    //bad request
    res.status(400);
    throw new Error("id is requred");
  }
  const player = await Player.findById(req.params.id);
  if (!player) {
    //no player was found
    res.status(404);
    throw new Error("no such player");
  }
  res.status(200).json(player);
});

//create player
//POST API/RECORDS
const createPlayer = asyncHandler(async (req, res) => {
  //checl for the following properties: name, position, level
  if (!req.body.name || !req.body.position || !req.body.level) {
    res.status(400);
    throw new Error("name, position, and level are required");
  }
  const player = await Player.create({
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  });
  return res.status(201).json(player);
});

//update player
//PUT API/RECORDS/:id
const updatePlayer = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("id is required");
  }
  if (!req.body.name || !req.body.position || !req.body.level) {
    res.status(400);
    throw new Error("name, position, and level are required");
  }
  //find and update can be done in one step
  const player = await Player.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
    { new: true }
  );
  res.status(200).json(player);
});

//delete player
//DELETE API/RECORDS/:id
const deletePlayer = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("id is required");
  }
  //find by and delete can be completed in one step
  const deletePlayer = await Player.findByIdAndDelete(req.params.id);
  res.status(200).json(deletePlayer);
});

//Seed the database
const seedPlayers = asyncHandler(async (req, res) => {
  //remove all existing records
  await Player.deleteMany({});
  const createdPlayers = await Player.insertMany(playerData);
  res.status(201).json(createdPlayers);
});

module.exports = {
  getPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
  seedPlayers,
};
