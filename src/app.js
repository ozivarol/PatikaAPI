const express = require("express");
const config = require("./config");
const loaders = require("./loaders");
const helmet = require("helmet")
const cors = require("cors")
const { ModelRoutes } = require("./routers")


config();
loaders();

const app = express()
app.use(express.json())
app.use(cors({
    methods: "*",
    origin: "*",


}));
app.use(
    express.urlencoded({

        extended: false,
    })
)

app.use(helmet())

app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING ${process.env.PORT}`)



})

app.get('/main', (req, res) => {
    res.json({
        message: "Hello, welcome to Patika App",
    });
})

app.use("/patika", ModelRoutes)