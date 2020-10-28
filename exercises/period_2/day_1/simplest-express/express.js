const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Test from Express");
})

app.get("/required/:msg", (req, res) => {
    const msg = req.params.msg
    res.send({msg})
})

//query?year=2000&month=11
app.get("/query", (req, res) => {
    const {year, month} = req.query;
    res.send({year, month})
})

app.post("/post", (req, res) => {
    console.log(req.body);
    const {first, last} = req.body;
    res.send({first, last});
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})