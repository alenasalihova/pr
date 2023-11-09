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
exports.getUserById = exports.register = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const newUser = yield prisma.user.create({
            data: {
                username,
                password,
            },
        });
        res.send(newUser);
    }
    catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the User.',
        });
    }
});
exports.register = register;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    try {
        const user = yield prisma.user.findUnique({
            where: { id: userId },
        });
        if (user) {
            res.send(user);
        }
        else {
            res.status(404).send({
                message: `User with id ${userId} not found.`,
            });
        }
    }
    catch (error) {
        res.status(500).send({
            message: `Error retrieving user with id ${userId}.`,
        });
    }
});
exports.getUserById = getUserById;
