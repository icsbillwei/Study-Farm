import express from 'express';
import db from "../db/connection.mjs";
var router = express.Router();
import Task from "../models/task.mjs"
import users from "./users.mjs";
import { findUserByUsername } from '../queries/user_queries.mjs';
import {deleteTask, findTaskById, findTasksByUsername, insertTask} from "../queries/task_queries.mjs";

// get tasks
router.get('/:username', async function(req, res, next) {
    const username = req.params.username
    const tasks = await findTasksByUsername(username);
    res.status(200).send(tasks);
});

// insert tasks
router.post('/:username', async function(req, res) {
    const task = req.body;
    const username = req.params.username;
    if (task.username !== username) {
        return res.status(400).send("URL username should match the one of task field");
    }

    let user = await findUserByUsername(username);
    if (!user) {
        res.status(400).send("User not found");
    } else {
        await insertTask(task);
        return res.status(200).send("Task added");
    }
});

// delete tasks
router.delete('/:taskId', async function(req, res) {
    const taskId = req.params.taskId;
    let task = findTaskById(taskId);
    if (!task) {
        return res.status(400).send("Task not found");
    } else {
        await deleteTask(taskId);
        return res.status(200).send("Task deleted");
    }
});
export default router;