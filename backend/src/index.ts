import express from "express";
import coursesRouter from "./routes/courses";
import articlesRouter from "./routes/articles";
import eventsRouter from "./routes/events";
import adminRouter from "./routes/admin";
import mongoose from "mongoose";

//TODO: Add error checking to each route
//TODO: Add authentication layer to the application
//

const MONGO_URL = "mongodb://localhost:27017/gdg";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected To Mongo succesfully"))
  .catch((e) => console.error(`Sorry an error occured ${e}`));

const app = express();
app.use(express.json());
const port = 3000;

app.use("/articles", articlesRouter);
app.use("/events", eventsRouter);
app.use("/courses", coursesRouter);

app.use("/admin", adminRouter);

//WILDCARD ENDPOINT
app.use((req, res) => res.status(404).json({ message: "Non valid endpoint" }));

app.listen(port, () => console.log(`listening on port ${port}....`));
