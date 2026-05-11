import express from 'express';

const app = express();

// app.get('/', (req,res) => {
//     res.send('Server is Ready');
// });

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id : 1,
            title: 'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'Another Joke',
            content:'This is another joke'
        },
        {
            id:3,
            title:'A third Joke',
            content:'This is third joke'
        },
        {
            id:4,
            title:'A fourth joke',
            content:'This is Fourth joke'
        },
        {
            id:5,
            title:'A Fifth joke',
            content:'This is Fifth Joke'
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);

});


