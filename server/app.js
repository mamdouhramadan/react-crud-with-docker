const express = require('express');
const connectDb = require('./src/connection');
const User = require('./src/User.model');
var cors = require('cors')

const app = express();

const PORT = process.env.PORT || 9000;

app.use(cors());

app.get('/', (req, res) => {
    res.send(`<h1>Server Connected on port ${PORT} !</h1> \n`);
    connectDb().then(() => {
        console.log('MongoDb connected');
    }).catch((err) => {
        console.log('Error: ', err);
    });
});

app.get('/users', async (req, res, next) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        next(error);
    }

});


// add new user
app.post('/users/add', async (req, res) => {
    const user = new User(req.query);
    await user.save(user).then(() => {
        res.json(user);
    }).catch((err) => {
        res.json('Error: ', err);
    });
});

// view user
app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

// update user
app.put('/users/update/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.query, { new: true });
    res.json(user);
});

// delete user
app.delete('/users/delete/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
});


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
    connectDb().then(() => {
        console.log('MongoDb connected');
    });
});