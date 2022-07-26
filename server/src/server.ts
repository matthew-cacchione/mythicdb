import express, { Response, Request } from "express";

// Import routers.
import affixRouter from "./routes/affixes";
import characterRouter from "./routes/characters";

const PORT = 8000;

const app = express();

app.use(express.json());

// Requests for static files will look in public.
app.use(express.static("public"));

// Endpoints.
app.use(affixRouter);
app.use(characterRouter);

app.get("*", (req: Request, res: Response) => {
  return res.status(404).json({ status: 404, message: "No endpoint found." });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
