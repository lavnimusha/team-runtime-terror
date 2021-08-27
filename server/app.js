const colors = require("colors");
const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const { notFound, errorHandler } = require("./middleware/error");
const connectDB = require("./db");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fileUpload = require("express-fileupload");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const requestRouter = require("./routes/request");
const profileRouter = require("./routes/profile");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

// Require all models
var dataSchema = require("./models/index");

const { json, urlencoded } = express;

connectDB();
const app = express();
const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", async (socket) => {
  const clientCookie = cookie.parse(socket.handshake.headers.cookie);

  try {
    const decodedData = jwt.verify(clientCookie.token, process.env.JWT_SECRET);
    const userData = await dataSchema.User.findOne({
      _id: decodedData.id,
    });
    console.log("\x1b[35m", `${userData.username} is online`);
    console.log("connected".yellow.underline.bold);
  } catch (err) {
    console.log("Invalid token");
  }
});

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use(fileUpload());
app.use((req, res, next) => {
  req.io = io;
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/requests", requestRouter);
app.use("/profile", profileRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname), "client", "build", "index.html")
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

app.use(notFound);
app.use(errorHandler);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = { app, server };
