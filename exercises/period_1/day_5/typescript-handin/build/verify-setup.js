"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//import http = require('http');
const http = require("http"); // npm i @types/node
const node_fetch_1 = require("node-fetch"); // npm i node-fetch & npm i @types/node-fetch
const server = http.createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield node_fetch_1.default(`https://swapi.dev/api/people/1/`).then(res => res.json());
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();
})).listen(8080);
console.log('Server running on port 8080');
//# sourceMappingURL=verify-setup.js.map