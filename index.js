const { Game } = require("@gathertown/gather-game-client");
global.WebSocket = require("isomorphic-ws");
const express = require('express');
const cors = require('cors');
var app = express()

// enbling CORS for any unknown origin(https://xyz.example.com)
app.use(cors());

// create the game object, giving it your spaceId and API key of your choice in this weird way
const game = new Game('ZKU2Nk3LHinGmXOv/Onfiak', () => Promise.resolve({ apiKey: "1QbND1itLRLolQpw" }));
// this is the line that actually connects to the server and starts initializing stuff
game.connect();
// optional but helpful callback to track when the connection status changes
game.subscribeToConnection((connected) => console.log("connected?", connected));

// Game Mod

game.subscribeToEvent(
    "playerInteracts",
    ({ playerInteracts }, context) => {
        console.log(playerInteracts);
    });


<!-- ATIVATION SOUND EVENT IN COMAND CHAT NEARBY -->
game.subscribeToEvent("playerChats", (data, context) => {
    if(data.playerChats.recipient == 'LOCAL_CHAT') {
        if(data.playerChats.contents == '/palmas') {
            game.setObject("office-main", "sound-emitter", {
                id: "sound-emitter",
                x: 25,
                y: 27,
                normal: 'https://lh3.googleusercontent.com/taNvHR2MAwHdnvtiplN_cWsQ9-HXq_lTWYgYcSDmQQIQC_QZkBO086sAVfzMcugULbRcyVvbe4F65-MgVkvT1xnMomd58EVuSGNr=s400',
                sound: {
                    src: "https://cdn.pixabay.com/download/audio/2021/08/09/audio_ff81343224.mp3?filename=short-crowd-cheer-6713.mp3",
                    volume: 0.5,
                    maxDistance: 200,
                    isPositional: false,
                    loop: true,
                },
                type: 0,
                width: 1,
                height: 1,
            });
            setTimeout(function () {
                game.deleteObject("office-main", "sound-emitter");
            }, 10000);
        } else if(data.playerChats.contents == '/sinos') {
            game.setObject("office-main", "sound-emitter", {
                id: "sound-emitter",
                x: 25,
                y: 27,
                normal: 'https://lh3.googleusercontent.com/taNvHR2MAwHdnvtiplN_cWsQ9-HXq_lTWYgYcSDmQQIQC_QZkBO086sAVfzMcugULbRcyVvbe4F65-MgVkvT1xnMomd58EVuSGNr=s400',
                sound: {
                    src: "https://cdn.pixabay.com/download/audio/2021/08/04/audio_cbdaac3beb.mp3?filename=shop-door-bell-6405.mp3",
                    volume: 0.5,
                    maxDistance: 200,
                    isPositional: false,
                    loop: true,
                },
                type: 0,
                width: 1,
                height: 1,
            });
            setTimeout(function () {
                game.deleteObject("office-main", "sound-emitter");
            }, 10000);
        }
    }


});