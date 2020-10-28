"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const converter = __importStar(require("../src/converter"));
describe("Color Code Converter", function () {
    describe("RGB to Hex conversion", function () {
        it("converts the basic colors", function () {
            var redHex = converter.rgbToHex(255, 0, 0);
            var greenHex = converter.rgbToHex(0, 255, 0);
            var blueHex = converter.rgbToHex(0, 0, 255);
            chai_1.expect(redHex).to.equal("ff0000");
            chai_1.expect(greenHex).to.equal("00ff00");
            chai_1.expect(blueHex).to.equal("0000ff");
        });
    });
    describe("Hex to RGB conversion", function () {
        it("converts the basic colors", function () {
            var red = converter.hexToRgb("ff0000");
            var green = converter.hexToRgb("00ff00");
            var blue = converter.hexToRgb("0000ff");
            chai_1.expect(red).to.deep.equal([255, 0, 0]);
            chai_1.expect(green).to.deep.equal([0, 255, 0]);
            chai_1.expect(blue).to.deep.equal([0, 0, 255]);
        });
    });
});
