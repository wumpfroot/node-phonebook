import express from "express";
import notes from "./notes.js";

const app = express();

app.get("/", (req, res) => {
	res.send("<h1>Hello <i>express</i></h1>");
});

app.get("/api/notes", (req, res) => {
	res.json(notes);
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
