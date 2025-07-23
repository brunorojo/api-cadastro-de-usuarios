import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios',
    (req, res) => {
        console.log(req.body)

        users.push(req.body)
        res.status(201).send('created')
    })

app.get('/usuarios', (req, res) => {
    console.log(req.body)
    res.status(200).json(users)
})

app.listen(3000)