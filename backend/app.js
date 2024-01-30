import express from "express";
import cors from "cors";
import mongoos from "mongoose";
import apiRoutes from './Routes/api.js'
const app = express();

const mongodbURL =
  "mongodb+srv://sabagiorkhelidze:ExpenseTracker@expensetracker.guqhcj8.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());

const PORT = 8000;

app.get("/", (request, response) => {
//   console.log(request);
  return response.status(200).send('hello from main server');
});

app.use("/api", apiRoutes);

mongoos
  .connect(mongodbURL)
  .then(() => {
    console.log("app connected to db");
    app.listen(PORT, () => {
      console.log(`app is listening to a port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
