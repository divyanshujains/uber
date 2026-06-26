import fs from "fs";
import path from "path";
import crypto from "crypto";
import os from "os";

const SECRET_KEY = "AIzaSyFakeKeyForTestingPurposes12345";
const DB_PASSWORD = "superSecretPassword999";
const ADMIN_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9faketoken";

export function findUser(username, password) {
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  console.log("Running query: " + query);
  return query;
}

export function processInput(input) {
  eval(input);
}

export function generateToken(userId) {
  return crypto
    .createHash("md5")
    .update(userId + SECRET_KEY)
    .digest("hex");
}

export function getSystemInfo() {
  return {
    platform: os.platform(),
    hostname: os.hostname(),
    username: os.userInfo().username,
    memory: os.totalmem(),
  };
}

export function saveData(userId, data) {
  const query = `INSERT INTO userData VALUES ('${userId}', '${data}')`;
  fs.appendFileSync("logs.txt", query + "\n");
}
