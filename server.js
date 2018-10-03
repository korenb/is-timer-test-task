let express = require('express');
var path = require('path'); // https://www.w3schools.com/nodejs/met_path_join.asp

let server = express(),
    port = 5000,
    wwwroot = path.join(__dirname, 'src');

server.get('/', (req, res) => {
    console.log('Запрос', req.path);
    res.sendFile(path.join(wwwroot, 'index.html'));
});

// http://expressjs.com/en/starter/static-files.html
server.use(express.static(wwwroot));

server.listen(port);

console.log(`Таймер запущен: http://localhost:${port}/`);