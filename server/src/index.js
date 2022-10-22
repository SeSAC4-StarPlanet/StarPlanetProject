const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const app = express();


//* middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client/build')));


/* env */
const config = require('../config/default');
const port = config.port || 8000;
const redCon = config.redis;
// const clientUrl = config.client;


/* Cors */
const cors = require('cors');
const corsOptions = { origin: true, credentials: true }
app.use(cors(corsOptions)); // app.use(cors({ origin: clientUrl }));


/* Redis 연결*/
const redis = require('redis');
const redisClient = redis.createClient({
    url: `redis://${redCon.REDIS_USERNAME}:${redCon.REDIS_PASSWORD}@${redCon.REDIS_HOST}:${redCon.REDIS_PORT}/0`,
    legacyMode: true,
});
redisClient.on('connect', () => { console.info('Redis Connected'); });
redisClient.on('error', (err) => { console.error('Redis Client ERROR', err); });
redisClient.connect().then(); // redis v4 연결 (비동기)
const redisCli = redisClient.v4; // 기본 redisClient 객체는 콜백기반인데 v4버젼은 프로미스 기반이라 사용

/* 쿠키-세션-passport*/
const RedisStore = require('connect-redis')(session);
const sessionOption = {
    resave: false,
    saveUninitialized: false,
    secret: config.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    store: new RedisStore({ client: redisClient, prefix: 'session:' }) // 세션 데이터를 로컬 서버 메모리가 아닌 redis db에 저장하도록 등록
};

app.use(cookieParser(config.COOKIE_SECRET));
app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());





//* routes */
app.use('/api', require('./routes'));
app.use((req, res, next) => {
    res.send(`${req.method} ${req.url} 라우터가 없습니다.`);
});
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });


/* DB */
const mongoose = require('mongoose');
mongoose.connect(config.db.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, });
mongoose.connection.once('open', function () { console.log('DB Connected'); });
mongoose.connection.on('error', function (err) { console.log('DB ERROR : ', err); });






app.listen(port, () => {
    console.log(`Server start! port : ${port}`);
});
