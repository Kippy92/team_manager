console.log("inside of models/player.js");

const mongoose = require("mongoose");
const GameSchema = require("./game.js")

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Player must have a name"], 
        maxlength: 255
    },
    position: {
        type: String 
    },
    games: {
        type: GameSchema,
        default: {
            "game1": "Undecided",
            "game2": "Undecided",
            "game3": "Undecided",
        }
    }
}, {timestamps: true});

mongoose.model('Player', PlayerSchema);