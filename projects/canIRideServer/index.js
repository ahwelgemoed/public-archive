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
  let wetTime;
  console.log('New client connected'),
    getApiAndEmit(socket),
    socket.on('wetTime', inComing => {
      // console.log(inComing);
      wetTime = inComing;
    });
  setInterval(() => morningCheck(socket, wetTime), 10000);

  socket.on('disconnect', () => console.log('Client disconcted'));
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
const morningCheck = async (socket, wetTime) => {
  // console.log(wetTime);

  const TimeNow = moment(Date.now()).format('HH:mm');
  const SetTime = '15:58';
  // Sees if Time is past 6 in morning The Goes To API TO GET TODAYS RAIN
  if (SetTime <= TimeNow) {
    await axios
      .get(
        'https://api.apixu.com/v1/forecast.json?key=dd99207c8c4148969ea112809192403&q=Stellenbosch&days=2'
      )
      .then(function(response) {
        const res = response.data;
        const rainForTheDay = res.forecast.forecastday[0].day.totalprecip_mm;
        // IF RAIN THEM PASS TRUE ELSE PASS FALSE
        if (rainForTheDay >= 0) {
          itsRain(socket, true, wetTime);
          console.log('Yes');
        } else {
          itsRain(socket, false, wetTime);
          console.log('Yes');
        }
      });
  } else {
    console.log('No');
  }
};

const itsRain = (socket, val, wetTime) => {
  const TimeNow = moment(Date.now()).format('HH:mm');
  const SetTime = '20:47';
  console.log(wetTime);

  // IF RAIN AND NOW TIME = TO WHENALARM SHOUD GO OFF FOR RAIN
  if (val && TimeNow == wetTime) {
    console.log('Sun Alarm');
    socket.emit('LETALARMOFF', true);
  }
  // IF NO RAIN AND NOW TIME = TO WHENALARM SHOUD GO OFF FOR NO RAIN
  if (!val && TimeNow == '16:31') {
    console.log('Rain Alarm');
    socket.emit('LETALARMOFF', true);
  }
};
server.listen(port, () => console.log(`Listening on port ${port}`));
