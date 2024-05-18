import fetch from "node-fetch";
import dotenv from "dotenv";
import task from "../models/task.mjs";

dotenv.config();

const X_API_KEY = process.env["X-API-KEY"]
const baseUrl = process.env["NEURELO_BASE_URL"]

export async function insertTask(task) {
    // console.log(`${baseUrl}/rest/tasks/__one`)
    const res = await fetch(`${baseUrl}/rest/tasks/__one`, {
        headers: {
            "X-API-KEY" : X_API_KEY,
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(task)
    });
    if (!res.ok) {
        throw Error("insert task failed");
    }
}

export async function findTasksByUsername(username) {
    const filter = `{"username" : "${username}"}`;
    const res = await fetch(`${baseUrl}/rest/tasks/?filter=${filter}`, {
        headers: {
            "X-API-KEY" : X_API_KEY,
        }
    });
    if (!res.ok) {
        throw Error("insert task failed");
    }
    return (await res.json())['data'];
}

export async function findTaskById(taskId) {
    const filter = `{"id" : "${taskId}"}`;
    const res = await fetch(`${baseUrl}/rest/tasks/?filter=${filter}`, {
        headers: {
            "X-API-KEY" : X_API_KEY,
        }
    });
    if (!res.ok) {
        throw Error("find task failed");
    }
    return (await res.json())['data'][0];
}

export async function deleteTask(taskId) {
    const res = await fetch(`${baseUrl}/rest/tasks/${taskId}`, {
        headers: {
            "X-API-KEY" : X_API_KEY,
        },
        method: "DELETE"
    });
    if (!res.ok) {
        throw Error("find task failed");
    }
}