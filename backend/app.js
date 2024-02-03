import express from "express";
import cors from "cors";
import mongoos from "mongoose";
import apiRoutes from './Routes/api.js'
const app = express();


app.use(express.json());
app.use(cors());


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
