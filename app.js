const express = require('express');
const config = require('config');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const localDb = new Set();

// app.use(express.json({ extended: true }));

// app.use('/', require('./routes/chatroom.routes'));

const PORT = config.get('port') || 5000;

async function start() {
  try {
    server.listen(PORT, () => console.log(`Started on ${PORT}`));
  } catch (e) {
    console.log('Error', e.message);
    process.exit(1);
  }
}

io.on('connection', function (client) {
  console.log('Client connected...');

  client.on('createRoom', (roomId) => {
    client.join(roomId);
    console.log('createRoom', roomId);
  });

  client.on('joinRoom', ({ nickname, roomId }) => {
    client.join(roomId);
    console.log('joinRoom', roomId);
    //io.to(roomId).broadcast('enteryRoom', nickname);
  });

  client.on('message', (data) => {
    io.to(data.roomId).emit('messages', data);
  });
});

start();
