const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js")
const dataRoute = require("./routes/dataRoute.js")


const app = express();

app.use(express.json());
app.use(cors({ origin: "https://lead-generation-4nno.onrender.com" }));

PORT="3232"


//Database connect
connectDB()

app.use("/api/data",dataRoute)

app.listen(PORT,()=>{
    console.log("Server Started")
})