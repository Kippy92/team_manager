console.log ("inside of config/routes.js");

const Players = require("../controllers/players");


module.exports = function(app){
    app.get("/players/list", Players.getAll);
    app.get("/players/list/:id", Players.getId);
    app.post("/players/addplayer", Players.create);
    app.put('/players/list/:id', Players.update);
    app.delete('/players/list/:id', Players.delete);
}