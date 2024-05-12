import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import memberRoutes from "./src/routes/memberRoutes.js";
import contributionRoutes from "./src/routes/contributionRoutes.js";
import memberShipRoutes from "./src/routes/membershipRoutes.js";
import eventRoutes from "./src/routes/eventRoutes.js";
import membershipPlanRoutes from "./src/routes/membershipPlanRoutes.js";
import { config } from 'dotenv';
const result = config();

const app = express();
const PORT = process.env.SERVER_PORT || 3002

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/member', memberRoutes)
app.use('/api/contribution', contributionRoutes)
app.use('/api/membership', memberShipRoutes)
app.use('/api/event', eventRoutes)
app.use('/api/plans', membershipPlanRoutes)


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
