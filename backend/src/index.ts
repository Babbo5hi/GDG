import express from "express";
import coursesRouter from "./routes/courses";
import articlesRouter from "./routes/articles";
import eventsRouter from "./routes/events";
import adminRouter from "./routes/admin";

const app = express();
const port = 3000;

app.use("/articles", articlesRouter);
app.use("/events", eventsRouter);
app.use("/courses", coursesRouter);

app.use("/admin", adminRouter);

//WILDCARD ENDPOINT
app.use((req, res) => res.status(404).send("Non valid endpoint"));

app.listen(port, () => console.log(`listening on port ${port}....`));
