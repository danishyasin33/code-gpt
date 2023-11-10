"use strict";
const handler = require('./code-gpt-lambda.ts').handler;
const event = {
    "headers": {
        "content-length": "57",
        "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",
        "x-amzn-tls-version": "TLSv1.2",
        "x-amzn-trace-id": "Root=1-652f5815-6f06bc2c777b9dac4acd95e6",
        "x-forwarded-proto": "https",
        "host": "336uxs362qeihv3zgbwzntd5wi0drmjm.lambda-url.us-east-1.on.aws",
        "x-forwarded-port": "443",
        "content-type": "application/json",
        "x-forwarded-for": "67.225.89.110",
        "accept-encoding": "gzip, deflate, br",
        "accept": "*/*",
        "user-agent": "Thunder Client (https://www.thunderclient.com)"
    },
    "isBase64Encoded": false,
    "rawPath": "/",
    "routeKey": "$default",
    "requestContext": {
        "accountId": "anonymous",
        "timeEpoch": 1697601557937,
        "routeKey": "$default",
        "stage": "$default",
        "domainPrefix": "336uxs362qeihv3zgbwzntd5wi0drmjm",
        "requestId": "b4f35c7f-46ed-44a3-9c81-7aa15dfa7c76",
        "domainName": "336uxs362qeihv3zgbwzntd5wi0drmjm.lambda-url.us-east-1.on.aws",
        "http": {
            "path": "/",
            "protocol": "HTTP/1.1",
            "method": "POST",
            "sourceIp": "67.225.89.110",
            "userAgent": "Thunder Client (https://www.thunderclient.com)"
        },
        "time": "18/Oct/2023:03:59:17 +0000",
        "apiId": "336uxs362qeihv3zgbwzntd5wi0drmjm"
    },
    "body": "{\n  \"code\": \"console.lg('hse')\"\n}",
    "version": "2.0",
    "rawQueryString": ""
};
handler(event).then((res) => {
    console.log("Result:");
    console.log(res);
}).catch((err) => {
    console.log("Error:");
    console.log(err);
});
//# sourceMappingURL=local-tes.js.map