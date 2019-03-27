const express = require("express");
const bc = require("./controllers/books_controller.js");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../build"));

app.get("/api/books", bc.readBooks);
app.post("/api/books", bc.createBooks);
app.put("/api/books/:id", bc.updateBooks);
app.delete("/api/books/:id", bc.deleteBooks);

const PORT = 4000;
app.listen(PORT, () => console.log(`server runnning on port ${PORT}`));
