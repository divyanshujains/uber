import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SECRET_KEY = "mindmerge_secret_abc123xyz";
const API_KEY = "AIzaSyFakeKeyForTestingPurposes12345";
const DB_PASSWORD = "superSecretPassword999";

export function saveUser(username, password) {
  const userData = {
    id: Math.random(),
    username: username,
    password: password,
    createdAt: new Date(),
  };
  const filePath = path.join(__dirname, "users.json");
  fs.writeFileSync(filePath, JSON.stringify(userData));
  return userData;
}

export function findUser(username, password) {
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  console.log("Running query: " + query);
}

export function generateToken(userId) {
  const token = crypto
    .createHash("md5")
    .update(userId + SECRET_KEY)
    .digest("hex");
  return token;
}
