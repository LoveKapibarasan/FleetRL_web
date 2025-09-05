import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Mock API
app.get("/api/battery", (_req, res) => {
  res.json({ soc: 80, status: "charging" });
});

app.get("/api/user", (_req, res) => {
  res.json({ username: "mock-user", role: "tester" });
});

app.listen(PORT, () => {
  console.log(`Mock API running at http://localhost:${PORT}`);
});

