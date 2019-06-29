const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

const bugService = require('./services/bug.service')

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

// const bugs = [{"id": "c101", "vendor" : "Audu"}, {"id": "c102", "vendor" : "Spiat"}]

// Car LIST
app.get('/api/bug', (req, res) => {
    console.log('User is: ', req.session.userName);
    bugService.query()
        .then(bugs => res.json(bugs))
})
// Car Single
app.get('/api/bug/:id', (req, res) => {
    const bugId = req.params.id
    bugService.getById(bugId)
    .then(bug => res.json(bug))
})

// Car Delete
app.delete('/api/bug/:id', (req, res) => {
    const bugId = req.params.id
    bugService.remove(bugId)
    .then(()=>{
        res.json({})
    })
})

// Car Add
app.post('/api/bug', (req, res) => {
    const bug = req.body;
    bugService.add(bug)
    .then(bugWithId => res.json(bugWithId))
})

// Car Edit
app.put('/api/bug/:id', (req, res) => {
    const bug = req.body;
    bugService.update(bug)
    .then(bug => res.json(bug))
})

app.get('/setUser/:name', (req, res)=>{
    req.session.userName = req.params.name
    res.end('DONE')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))