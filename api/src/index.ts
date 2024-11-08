import express, { Request, Response } from "express";
import path from "path";
import { access, create } from "./controllers/mock.controllers";

const app = express();
const port = 5555;

const reactPath = "../../web/dist";

app.use(express.json());
app.use(express.static(path.join(__dirname, reactPath)));

app.get("/api", (_: Request, res: Response) => {
  res.json({
    title: "Home Page",
    message: "Welcome to the static React app with Express!",
  });
});

// Serve React app for all other routes
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, reactPath, "index.html"));
});

app.post("/api/mock/create", create);
app.all("/api/:endpoint/:id?", access);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
