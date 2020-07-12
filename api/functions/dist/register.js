"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const utils_1 = require("utils");
exports.handler = async (event) => {
    return utils_1.addDocument("User", JSON.parse(event.body));
};
