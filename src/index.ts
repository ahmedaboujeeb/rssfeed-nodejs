import express from 'express'
import apiRouter from "./api/routes/rssfeedRouter"


const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);
const port = 5000

app.listen(port, () => console.log(`Running on port ${port}`))

export default app 