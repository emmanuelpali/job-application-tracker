"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../../data"));
const jopApp = data_1.default;
const getEntries = () => {
    return jopApp;
};
const addJob = () => {
    return null;
};
const findById = (id) => {
    const jobEntry = jopApp.find(j => j.id === id);
    return jobEntry;
};
exports.default = {
    getEntries,
    addJob,
    findById
};
