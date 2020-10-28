"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const request_1 = __importDefault(require("request"));
describe("Color Code Converter API", function () {
    describe("RGB to Hex conversion", function () {
        var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";
        it("returns status 200", function (done) {
            request_1.default(url, function (err, response, body) {
                chai_1.expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it("returns the color in hex", function (done) {
            request_1.default(url, function (error, response, body) {
                chai_1.expect(body).to.equal("ffffff");
                done();
            });
        });
    });
    describe("Hex to RGB conversion", function () {
        var url = "http://localhost:3000/hexToRgb?hex=00ff00";
        it("returns status 200", function (done) {
            request_1.default(url, function (error, response, body) {
                chai_1.expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it("returns the color in RGB", function (done) {
            request_1.default(url, function (error, response, body) {
                chai_1.expect(body).to.equal("[0,255,0]");
                done();
            });
        });
    });
});
