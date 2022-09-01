import express, { Request } from 'express';
import { TodoService } from './service';

const service = new TodoService();

const controller = express.Router();

controller.post(
    '/',
    async (
        req: Request,
        res,
        next,
    ) => {
        const text = req.body.text;
        await service.add(text);
        return res.status(201).send();
    });

controller.get(
    '/',
    async (
        req: Request,
        res,
        next,
    ) => {
        const items = await service.getAll();
        return res.status(200).send({ edges: items, count: items.length });
    });

controller.delete(
    '/:id',
    async (
        req: Request,
        res,
        next,
    ) => {
        const id = Number(req.params.id);
        await service.remove(id);
        res.status(200).send();
    });

export default controller;