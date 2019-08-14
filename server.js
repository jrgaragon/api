const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.get('/', (request, response) => {
    console.log(request.body);
    response.json({
        message:"MOCK Service"
    });
});

server.post('/LiteResponseV2', (request, response) => {
    console.log(request.body);
    response.json({
        result: {
            sourceEntityId: "" + request.body.result.sourceEntityId,
            destinationEntityId: "" + request.body.result.destinationEntityId,
            message: "" + new Date(),
            status: "success"
        }
    });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('listening at port', port)
});
