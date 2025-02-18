import http from "http";
import notes from "./notes.js";

const app = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end(JSON.stringify(notes));
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
