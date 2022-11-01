const express = require("express");
const app = express();
const path = require('path');
const passport = require("passport");


/* env */
const config = require("../config/default");
const port = config.port || 8000;
const clientUrl = config.client;
// const redCon = config.redis;


//* middlewares */

/* cors */
const cors = require("cors");
const corsOptions = {
  origin: clientUrl,
  Credential: true,
  exposedHeaders: 'authorization'
};
app.use(cors(corsOptions));

/* bodyParser */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* DB */
const DB = require('./models');
DB();

/* session */
const cookieParser = require("cookie-parser");
app.use(cookieParser(config.COOKIE_SECRET));
const session = require("express-session");
app.use(
  session({
    resave: false, saveUninitialized: false, secret: config.COOKIE_SECRET,
    cookie: { httpOnly: true, secure: false, },
    // store: new RedisStore({ client: redisClient, prefix: 'session:' })
  })
);
app.use(passport.initialize());
app.use(passport.session());
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

/* view(test) */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));





//TODO routes */
app.use("/api", require("./routes/api"));

// app.use(express.static(path.join(__dirname, '../', 'client')));
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });

app.use((req, res, next) => {
  res.send(`${req.method} ${req.url} 라우터가 없습니다.`);
});



app.listen(port, () => {
  console.log(`Server start! port : ${port}`);
});

