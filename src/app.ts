import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/UserRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", userRouter);

mongoose
  .connect("mongodb://localhost:27017/layered_architecture")
  .then(() => {
    console.log("Connected to MongoDB")
    app
      .listen(PORT)
      .on("listening", () => console.log(`Server running on http://localhost:${PORT}`))
  })
  .catch((error) => console.error("Database connection error:", error));