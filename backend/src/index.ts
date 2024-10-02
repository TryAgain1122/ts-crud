import express from 'express'
import dotenv from 'dotenv';
import dbConnect from './config/dbConnect';
import cors from 'cors'
import userRoute from './routes/userRoute';

dotenv.config();
dbConnect();
const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
}))

app.use('/api/users', userRoute)

const port = 3000
app.listen(port, () => {
    console.log("Server is running")
})
