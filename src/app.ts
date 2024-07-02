import { Request, Response } from "express";

const express = require('express');
const app = express();
const cors = require('cors');

// parsers
app.use(express.json());
app.use(cors());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;