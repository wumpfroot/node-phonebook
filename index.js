import express from "express";
import persons from "./persons.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("<h1>Hello <i>express</i></h1>");
});

// GET request for an info page
app.get("/info", (req, res) => {
	res.send(`Phonebook has info for ${persons.length} people\n${new Date()}`);
});

// GET request for all contacts
app.get("/api/persons", (req, res) => {
	res.json(persons);
});

// GET request for a single contact
app.get("/api/persons/:id", (req, res) => {
	const id = req.params.id;
	const person = persons.find((person) => person.id === id);

	if (!person) {
		return res.status(404).send(`Person with the id of ${id} not found`);
	}

	res.json(person);
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
