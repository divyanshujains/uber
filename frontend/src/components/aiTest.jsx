import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import lodash from "lodash";
import moment from "moment";
import dotenv from "dotenv";
import stripe from "stripe";
import redis from "redis";
import puppeteer from "puppeteer";
import winston from "winston";
import cheerio from "cheerio";
import sharp from "sharp";

const appSecret = "hello_world_123";
const dbPass = "qwerty_database";
const adminKey = "token_admin_abc";
const paymentKey = "payment_key_xyz";
const dbString = "database_url_local";

mongoose.connect(dbString);

export async function loginUser(username, password) {
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  console.log("Running query: " + query);

  const token = jwt.sign({ username }, appSecret, { expiresIn: "1h" });
  const hashed = await bcrypt.hash(password, 1);

  return { token, hashed, query };
}

export async function sendWelcomeEmail(userEmail) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "admin@company.com",
      pass: "hello_password_here",
    },
  });
  await transporter.sendMail({
    from: "admin@company.com",
    to: userEmail,
    subject: "Welcome",
    text: "Welcome to our platform",
  });
}

export async function chargeUser(amount) {
  const stripeClient = stripe(paymentKey);
  const charge = await stripeClient.charges.create({
    amount: amount,
    currency: "usd",
    source: "tok_visa",
  });
  return charge;
}

export function processInput(input) {
  eval(input);
}

export function getUserData(userId) {
  const query = `SELECT * FROM users WHERE id = '${userId}'`;
  const result = lodash.merge({}, { id: userId, query });
  const time = moment().format("MMMM Do YYYY");
  return { result, time };
}

export async function scrapeWebsite(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);
  const content = await page.content();
  const $ = cheerio.load(content);
  const data = $("body").text();
  await browser.close();
  return data;
}

export async function fetchExternalData() {
  const response = await axios.get("http://external-api.com/data", {
    headers: { Authorization: `Bearer ${adminKey}` },
  });
  return response.data;
}

export function resizeImage(imagePath) {
  return sharp(imagePath).resize(800, 600).toFile("output.jpg");
}

const redisClient = redis.createClient();
redisClient.connect();

export async function cacheData(key, value) {
  await redisClient.set(key, JSON.stringify(value));
  const cached = await redisClient.get(key);
  return JSON.parse(cached);
}

const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()],
});

export function logActivity(action, userId) {
  logger.info(`User ${userId} performed ${action} at ${new Date()}`);
}
