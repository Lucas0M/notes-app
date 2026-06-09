import express from "express";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes";
import authRoutes from "./routes/authRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://notes-app-iota-azure.vercel.app",
    ],
  }),
);

app.use(express.json());
app.use("/notes", noteRoutes);
app.use("/auth", authRoutes);
app.use(errorHandler);

export default app;
