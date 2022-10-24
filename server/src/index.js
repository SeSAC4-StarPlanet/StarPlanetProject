const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const cors = require("cors");

const app = express();

/* env */
const config = require("../config/default");
const port = config.port || 8000;
// const redCon = config.redis;
// const clientUrl = config.client;

//* middlewares */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true })); // app.use(cors({ origin: clientUrl }));
app.use(cookieParser(config.COOKIE_SECRET));

/* Redis */
// const redis = require('redis');
// const redisClient = redis.createClient({
//     url: `redis://${redCon.REDIS_USERNAME}:${redCon.REDIS_PASSWORD}@${redCon.REDIS_HOST}:${redCon.REDIS_PORT}/0`,
//     legacyMode: true,
// });
// redisClient.on('connect', () => { console.info('Redis Connected'); });
// redisClient.on('error', (err) => { console.error('Redis Client ERROR', err); });
// redisClient.connect().then(); // redis v4 연결 (비동기)
// const redisCli = redisClient.v4; // redisClient객체(v4버젼) 프로미스 기반

// const RedisStore = require('connect-redis')(session);
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: config.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    // store: new RedisStore({ client: redisClient, prefix: 'session:' })
  })
);
app.use(passport.initialize());
app.use(passport.session());

const auth = require("./routes/auth");
app.use("/auth", auth);

//* routes */
app.use("/api", require("./routes"));
app.use((req, res, next) => {
  res.send(`${req.method} ${req.url} 라우터가 없습니다.`);
});
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });

/* DB */
const mongoose = require("mongoose");
mongoose.connect(config.db.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", function () {
  console.log("DB Connected");
});
mongoose.connection.on("error", function (err) {
  console.log("DB ERROR : ", err);
});

app.listen(port, () => {
  console.log(`Server start! port : ${port}`);
});
