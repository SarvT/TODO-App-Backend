import express from 'express';
import bodyParser from "body-parser";

import dataRoutes from "./routes/data.js";


const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use("/api", dataRoutes);


app.get("/", (req, res) => res.send("Welcome Here!"));
app.listen(PORT, () =>console.log(`Server is running at: http://localhost:${PORT}`));
