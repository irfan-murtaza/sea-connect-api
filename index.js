import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import memberRoutes from "./src/routes/memberRoutes.js";
import { config } from 'dotenv';
const result = config();

const app = express();
const PORT = process.env.SERVER_PORT || 3002

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/member', memberRoutes)


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
