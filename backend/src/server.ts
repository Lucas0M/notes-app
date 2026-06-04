import "dotenv/config";
import cors from "cors";
import express from "express";
import noteRoutes from "./routes/noteRoutes";
import authRoutes from "./routes/authRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
const PORT = 3333;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());
app.use("/notes", noteRoutes);
app.use("/auth", authRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
