import express from 'express';
import {getTask,
        getTaskById,
        addTask,
        updateTask,
        deleteTask
    } from '../controller/Controller.js';

const router = express.Router();

router.get('/task', getTask);
router.get('/task/:id', getTaskById);
router.post('/task', addTask);
router.patch('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

export default router;