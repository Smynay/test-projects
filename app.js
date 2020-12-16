const express = require('express');
const config = require('config');
const path = require('path');

const app = express();

app.use(express.json({ extended: true }));

app.use('/', require('./routes/chatroom.routes'));

const PORT = config.get('port') || 5000;

async function start() {
  try {
    app.listen(PORT, () => console.log(`Started on ${PORT}`));
  } catch (e) {
    console.log('Error', e.message);
    process.exit(1);
  }
}

start();
