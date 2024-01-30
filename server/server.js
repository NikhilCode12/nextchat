import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({success: 'correct'});
});

app.get("/chats", (req, res) => {
  res.json({ name: "next chat" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
