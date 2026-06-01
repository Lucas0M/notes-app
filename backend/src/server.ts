import express from "express";

const app = express();
const PORT = 3333;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Notes API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
