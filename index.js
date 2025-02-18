const http = require("http");

const app = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello Node!");
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
