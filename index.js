import express from "express";
import persons from "./persons.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

	return res.json(person);
});

// DELETE request for a single contact
app.delete("/api/persons/:id", (req, res) => {
	const id = req.params.id;
	const index = persons.findIndex((person) => person.id === id);

	if (index === -1) return res.status(404).send(`Person with the id of ${id} not found`);

	persons.splice(index, 1);
	return res.json(persons);
});

// POST request to add a person
app.post("/api/persons", (req, res) => {
	const { name, number } = req.body;
	const id = Math.floor(Math.random() * 9999) + (persons.length + 1);

	const person = {
		id: id.toString(),
		name: name,
		number: number,
	};

	if (!name || !number) return res.status(400).send("Fill all the fields");

	persons.push(person);
	return res.status(201).json({ "new person added": persons });
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
