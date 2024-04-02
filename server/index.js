// my settings aren't synced and i cannot log in to the right account
// please forgive any silly formatting that slips past me

// also i couldnt add to my about section sorry
//  https://nicoles-first-server.onrender.com/

const express = require('express');
const app = express();

const serveNothing = (req, res, next) => {
 res.send(`<h1>Pick an endpoint already...</h1>`)
}

const serveCluelessWindowsUser = (req, res, next) => {
  res.send('<p>this is my first time doing an assignment on mac and i feel like a boomer</p>')
}

const serveAndSlay = (req, res, next) => {
  res.send('<h1 color="blue">yasssssss</h1>')
}

const serveDinner = (req, res, next) => {
  const meal = req.query.dinner
  res.send(`you eated ${meal}!!!`)
}

const serveJailTime = (req, res, next) => {
  res.send('ouch!!!!')
}

app.get('/', serveNothing)
app.get('/api/clueless', serveCluelessWindowsUser)
app.get('/api/slay', serveAndSlay)
app.get('/api/mealtime', serveDinner)
app.get('/api/stab', serveJailTime)

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 
