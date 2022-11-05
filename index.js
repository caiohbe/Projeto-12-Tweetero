import express from 'express'

const app = express()
app.use(express.json())

const usuarios = []

app.post('/sign-up', (req, res) => {
    const { username, avatar} = req.body

    if (!username || !avatar) {
        console.log('Insira todos os campos')
        return
    }

    usuarios.push({
        username,
        avatar
    })

    res.send(usuarios)
}) 

app.listen(5000, () => console.log("app running at 5000"))