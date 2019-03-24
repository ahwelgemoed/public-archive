const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const axios = require('axios');
const moment = require('moment');
const port = 4001;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  console.log('New client connected'),
    getApiAndEmit(socket),
    setInterval(() => morningCheck(socket), 10000);

  socket.on('setAlarm', inComing => {
    console.log(inComing);
    const val = inComing + 1;
    console.log(val);
    io.sockets.emit('Listen', val);
  });

  socket.on('disconnect', () => console.log('Client disconnected'));
});

const getApiAndEmit = async socket => {
  await axios
    .get(
      'https://api.apixu.com/v1/forecast.json?key=dd99207c8c4148969ea112809192403&q=Stellenbosch'
    )
    .then(function(response) {
      socket.emit('FromAPI', response.data);
      const res = response.data;
      return res;
    });
};
const morningCheck = async socket => {
  const TimeNow = moment(Date.now()).format('HH:mm');
  const SetTime = '15:58';
  // Sees if Time is past 6 in morning
  if (SetTime <= TimeNow) {
    await axios
      .get(
        'https://api.apixu.com/v1/forecast.json?key=dd99207c8c4148969ea112809192403&q=Stellenbosch&days=2'
      )
      .then(function(response) {
        const res = response.data;
        const rainForTheDay = res.forecast.forecastday[0].day.totalprecip_mm;
        if (rainForTheDay >= 0) {
          itsRain(socket, true);
        } else {
          itsRain(socket, false);
        }
      });
  } else {
    console.log('No');
  }
};

const itsRain = (socket, val) => {
  const TimeNow = moment(Date.now()).format('HH:mm');
  const SetTime = '16:30';
  if (val && TimeNow == SetTime) {
    socket.emit('LETALARMOFF', true);
    console.log('Sun Alarm');
  }
  if (!val && TimeNow == '16:31') {
    socket.emit('LETALARMOFF', true);
    console.log('Rain Alarm');
  }
};
server.listen(port, () => console.log(`Listening on port ${port}`));
