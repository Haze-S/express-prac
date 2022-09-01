import express from 'express';
import { checkAuth } from '../middlewares/auth';

const controller = express.Router();

controller.get('/', function(req, res, next) {
    res.send('Users home page');
    next();
});

controller.get('/about', checkAuth, function(req, res, next) {
    const name = req.query.name || 'guest';
    res.send(`hello ${name}`);
    next();
});

export default controller;
