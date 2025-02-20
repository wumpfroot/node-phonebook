import express from "express";
import notes from "./notes.js";

const app = express();

app.get("/", (req, res) => {
	res.send("<h1>Hello <i>express</i></h1>");
});

// GET request for all notes
app.get("/api/notes", (req, res) => {
	const important = req.query.important;
	console.log(important);

	if (important === "true") {
		const filNotes = notes.filter((note) => note.important === true);
		res.json(filNotes);
	} else if (important === "false") {
		const filNotes = notes.filter((note) => note.important === false);
		res.json(filNotes);
	} else res.json(notes);
});

// GET request for a single note
app.get("/api/notes/:id", (req, res) => {
	const id = req.params.id;
	const note = notes.find((note) => note.id === id);

	if (!note) {
		return res.status(404).json({ ERROR: `404: Note ${id} does not exist...` });
	}
	res.json(note);
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
