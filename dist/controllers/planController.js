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
exports.getPlansByUserIdAndType = exports.createPlan = void 0;
const client_1 = require("@prisma/client");
//import { Plan, CreatePlanInput } from '../dist/models/Plan';
const prisma = new client_1.PrismaClient();
const createPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, userId, planType } = req.body;
    try {
        const newPlan = yield prisma.plan.create({
            data: {
                title,
                description,
                userId,
                planType,
            },
        });
        res.send(newPlan);
    }
    catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Plan.',
        });
    }
});
exports.createPlan = createPlan;
const getPlansByUserIdAndType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, planType } = req.params;
    try {
        const plans = yield prisma.plan.findMany({
            where: {
                userId: parseInt(userId),
                planType: planType,
            },
        });
        res.send(plans);
    }
    catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while retrieving plans.',
        });
    }
});
exports.getPlansByUserIdAndType = getPlansByUserIdAndType;
