import aedes from 'aedes';
import net from 'net';

const server = net.createServer(aedes().handle)
const port = 1883

server.listen(port, function () {
    console.log('server started and listening on port ', port)
})