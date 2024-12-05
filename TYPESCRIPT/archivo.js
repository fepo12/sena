"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function readJsonFile(path) {
    var data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}
function writeJsonFile(path, products) {
    var data = JSON.stringify(products, null, 2);
    fs.writeFileSync(path, data, 'utf-8');
}
var filePath = './products.json';
var products = readJsonFile(filePath);
products[0].price = 99.99;
writeJsonFile(filePath, products);
