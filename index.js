const express = require('express');
const socket = require('socket.io');
// App setup
const app = express();
const server = app.listen(3000, () => {
  console.log('Listening 3000');
});

app.use(express.static('public'));

// Socket setup

const io = socket(server);

io.on('connection', (socket) => {
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  });
});
