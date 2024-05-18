import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const X_API_KEY = process.env["X-API-KEY"]
const baseUrl = process.env["NEURELO_BASE_URL"]

export async function findUserByUsername(username) {
    const filter = `{"username" : "${username}"}`;
    // console.log(`${baseUrl}/rest/users/?filter=${filter}`);
    const res = await fetch(`${baseUrl}/rest/users/?filter=${filter}`, {
        headers: {
            "X-API-KEY" : X_API_KEY,
        }
    });
    if (!res.ok) {
        throw Error("find user failed");
    }
    return (await res.json())['data'][0];
}

export async function insertUser(user) {
    console.log(`${baseUrl}/rest/users/__one`)
    const res = await fetch(`${baseUrl}/rest/users/__one`, {
        headers: {
            "X-API-KEY" : X_API_KEY,
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(user)
    });
    if (!res.ok) {
        throw Error("insert user failed");
    }
}
