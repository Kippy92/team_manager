console.log("inside of models/game.js");

const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    game1: {
        type: String,
        default: "Undecided" 
    },
    game2: {
        type: String,
        default: "Undecided" 
    },
    game3: {
        type: String,
        default: "Undecided" 
    },

}, {timestamps: true});

mongoose.model('Game', GameSchema); 

module.exports = GameSchema;