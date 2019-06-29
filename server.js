const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

const bugService = require('./services/car.service')

app.use(express.static('public'))
app.use(bodyParser.json())

app.use(cookieParser());

var session = require('express-session')
app.use(session({
   secret: 'puki muki',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: false }
}))

app.get('/', (req, res) => res.send('Hello World!'))

// const cars = [{"id": "c101", "vendor" : "Audu"}, {"id": "c102", "vendor" : "Spiat"}]

// Car LIST
app.get('/api/car', (req, res) => {
    console.log('User is: ', req.session.userName);
    bugService.query()
        .then(cars => res.json(cars))
})
// Car Single
app.get('/api/car/:id', (req, res) => {
    const carId = req.params.id
    bugService.getById(carId)
    .then(car => res.json(car))
})

// Car Delete
app.delete('/api/car/:id', (req, res) => {
    const carId = req.params.id
    bugService.remove(carId)
    .then(()=>{
        res.json({})
    })
})

// Car Add
app.post('/api/car', (req, res) => {
    const car = req.body;
    bugService.add(car)
    .then(carWithId => res.json(carWithId))
})

// Car Edit
app.put('/api/car/:id', (req, res) => {
    const car = req.body;
    bugService.update(car)
    .then(car => res.json(car))
})

app.get('/setUser/:name', (req, res)=>{
    req.session.userName = req.params.name
    res.end('DONE')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))