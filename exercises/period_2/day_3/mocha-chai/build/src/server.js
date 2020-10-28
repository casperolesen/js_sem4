"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var app = express_1.default();
var converter = require("./converter");
app.get("/rgbToHex", function (req, res) {
    var red = parseInt(req.query.red, 10);
    var green = parseInt(req.query.green, 10);
    var blue = parseInt(req.query.blue, 10);
    var hex = converter.rgbToHex(red, green, blue);
    res.send(hex);
});
app.get("/hexToRgb", function (req, res) {
    var hex = req.query.hex;
    var rgb = converter.hexToRgb(hex);
    res.send(JSON.stringify(rgb));
});
app.listen(3000);
