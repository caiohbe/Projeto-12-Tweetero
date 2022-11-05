import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())

const usuarios = []

const tweets = [
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		tweet: "eu amo o hub"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		tweet: "eu amo o hub"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		tweet: "eu amo o hub"
	},
]

app.post('/sign-up', (req, res) => {
    const { username, avatar} = req.body

    if (!username || !avatar) {
        res.sendStatus(400)
        return
    }

    usuarios.push({
        username,
        avatar
    })

    //res.send(usuarios)
    res.sendStatus(200)
}) 

app.get('/tweets', (req, res) => {
    res.send(tweets)
})

app.post('/tweets', (req, res) => {
    console.log(req.body)
    res.send('foi')
})

app.listen(5000, () => console.log("app running at 5000"))