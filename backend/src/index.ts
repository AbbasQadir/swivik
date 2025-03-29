import express from "express";
import cors from "cors";

const app = express();
const PORT = 5001;

app.use(cors()); // enable CORS
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello from Express backend! 👋");
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
