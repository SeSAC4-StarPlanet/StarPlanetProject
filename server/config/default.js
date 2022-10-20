module.exports = {
    port: 8000,
    client: "", //[프로젝트]-[실행 URL과 포트]에서 설정하신 client domain을 넣어주세요!
    db: {
        MONGO_URI: "mongodb+srv://test:12340987@starplanet.i5qsztg.mongodb.net/?retryWrites=true&w=majority"
    },
    redis: {
        REDIS_HOST: 'redis-15601.c15.us-east-1-4.ec2.cloud.redislabs.com',
        REDIS_PORT: 15601,
        REDIS_USERNAME: 'default',
        REDIS_PASSWORD: 'grmoQtkOvvIZmNaeXQ8Krn3BTRAN5vmp'
    },
    COOKIE_SECRET: 'apple',
}