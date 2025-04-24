/*
  Essential module imports:
  - express: web framework
  - cors: handling cross-origin resource sharing (CORS) requests
  - config: configuration file
  - db: database connection
*/

const express = require("express")
const cors = require("cors")
const config = require("./config/env")
const db = require("./config/database")

/*
  Router imports:
  - userRouter: routes for user management
  - authRouter: routes for user authentication
*/
const userRouter = require("./routes/userRouter")
const authRouter = require("./routes/authRouter")
const categoryRouter = require("./routes/categoryRoute")
const productRouter = require("./routes/productRouter")
const saleRouter = require("./routes/saleRouter")
const initModels = require("./models/initModels")

const app = express()
const apiRouter = express.Router()

// Middleware
app.use(cors())
app.use(express.json());

// Rutes
apiRouter.use("/auth",authRouter)
apiRouter.use("/categories", categoryRouter)
apiRouter.use("/users", userRouter)
apiRouter.use("/products",productRouter),
apiRouter.use("/sales", saleRouter)

app.use("/api/v1",apiRouter)


// Connection to the database
const initDatabase = async () => {
  try {
    await db.authenticate();
    console.log('Connection to the database has been established successfully.');
    await db.sync({ alter: false });
    console.log("DB Synced");
    await initModels()
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

initDatabase()
//app listen
app.listen(config.port, () => {
  console.log(`Server Started At Port: ${config.port}`)
})
