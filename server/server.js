import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
/** Importing routes */
import authRoutes from "./routes/authRoutes.js";

import { roomHandler } from "./socket/roomHandler.js";

import session from "express-session"; /** package to create session for user auth */
import MongoStore from "connect-mongo"; /** package to use as store in the session */

/** Importing UserModel to implement passport */
import { UserModel } from "./models/UserModel.js";
import passport from "passport";

dotenv.config();

/** importing socket.io */
import { Server } from "socket.io";
import http from "http";

const app = express();
app.use(cors()); /** allows communication between the client and the server */
app.use(express.json()); /** parse json data */
app.use(bodyParser.json());

/** Setting up the server */
/**creates an HTTP server. accepts an argument that is the express app */
/** Handles all incoming http requests */
const server = http.createServer(app);

/** Initialize a new instance of socket.io server */
const io = new Server(server, {
  cors: {
    origin: "*" /** allows requests from any origin */,
    methods: ["GET", "POST", "PUT", "DELETE"] /** allowed http methods */,
  },
});

/** Socket connections */
/**This listens for a new client connection.
 * When a client connects to the server, the provided callback function is executed.
 * */
/**@socket - individual socket connection for the client. enables communication with connected clients*/
/**@socket - same connection used in the event listener when a client disconnects*/
/**@roomHandler - socket connections for creating, joining rooms */
io.on("connection", (socket) => {
  console.log("user is connected");
  roomHandler(socket);
  socket.on("disconnect", () => {
    console.log("User is disconnected");
  });
});

/** connection to database */
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

/** Setting up the mongo store to be used in the session to contain data */
const store = new MongoStore({
  mongoUrl: process.env.MONGO_URL,
  secret: process.env.MONGO_SECRET,
  touchAfter: 24 * 60 * 60 /** Interval between session updates */,
});

/** Configuring user sessions */
store.on("error", function (e) {
  console.log("session error");
});

// app.set("trust proxy", 1); /** trust first proxy */
const sessionConfig = {
  store,
  name: process.env.SESSION_NAME,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() * 1000 * 60 * 60 * 24 * 7 /** 1 week expiration */,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true /** prevents accessing of cookies in the client-side */,
  },
};

/** Instantiating the session using the configuration created */
app.use(session(sessionConfig));

/** Middleware to initialize passport for incoming requests, allows authentication strategies to be applied */
app.use(passport.initialize());
/** Allows persistent sessions. This should come after setting up session */
app.use(passport.session());

/**
 * verifying if a req.user that contains user data
 * verifying if a session is created correctly *
 */
app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

/** Using local strategy implemented in UserModel */
/** Sets up passport local to use LocalStrategy with correct options */
passport.use(UserModel.createStrategy());

/** storing user data in the session using passport*/
passport.serializeUser(UserModel.serializeUser());

/** de-storing the data in the session */
passport.deserializeUser(UserModel.deserializeUser());

/** routes */
app.use("/api/auth/", authRoutes);

/** error middleware for page not found */
app.use("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

/** middleware to handle errors for all requests */
app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 400;
  const message = err.message || "Something went wrong";
  res.status(status).json({ message: message });
});

/** Starts the http server */
server.listen(process.env.PORT, () => {
  console.log(`LISTENING TO SERVER ${process.env.PORT}`);
});
