const express = require('express'); //설치한 라이브러리 첨부
const app = express(); //라이브러리 이용해서 객체 생성

app.listen(8080, function () {
    console.log('listening on 8080')
});

app.get('/write', function (req, res) {
    res.sendFile(__dirname+ '/write.html');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});