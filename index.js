const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors")
const users = require("./users.json");

app.use(cors())

app.get("/", (request, response) => {
    response.send({response: true, code: 200, users: users});
});

app.get("/:id", (request, response) => {
    const { id } = request.params;
    const results = users.filter(user => user.id === Number(id));
    response.status(200).send({response: true, users: results});
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});