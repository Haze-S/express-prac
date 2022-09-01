import express from 'express';
import UserRouter from './user/controller';
import TodoRouter from './todo/controller';

const router = express.Router();

router.get('/healthcheck', (req, res) => {
    res.send('OK');
});
router.use('/user', UserRouter);
router.use('/todo', TodoRouter);

export default router;