const express = require('express')
const cors = require("cors")
const morgan = require("morgan")
const colors = require("colors")
const dotenv = require("dotenv")

dotenv.config();
const app = express()

app.use(express.json());
app.use(cors())
app.use(morgan("dev"))

app.use("/api/v1/todo",require("./routers/todoRouter"))
app.use("/api/v1/user",require("./routers/userRouter"))

const port = process.env.PORT || 8000



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})