import "dotenv/config";
import express from "express";
import noteRoutes from "./routes/noteRoutes";

const app = express();
const PORT = 3333;

app.use(express.json());

app.use("/notes", noteRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Notes API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
