console.log("inside of controllers/players.js");

const mongoose = require('mongoose');
const Player = mongoose.model('Player');

class Players {
    getAll(req, res){
        Player.find({}, function(err, players){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok", "players": players})
            }
        });
    }
    getId(req, res){
        Player.findOne({_id: req.params.id}, function(err, player){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok", "player": player});
            }
        });
    }
    create(req, res){
        let player = new Player(req.body);
        player.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok"});
            }
        });
    }
    update(req, res){
        Player.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok"});
            }
        })
    }
    delete(req, res){
        Player.remove({_id: req.params.id}, function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok"});
            }
        })
    }
}

module.exports = new Players();