const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
 
mongoose.connect("mongodb://127.0.0.1:27017/mails-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
    then(() => console.log("Connected to DB"))
    .catch(console.error);

const Mail = require('./models/mail');
const User = require('./models/user');
const { setTimeout } = require("timers/promises");

//For simplicity I have declared predefined mails here
const msgs = [
    {
        "subject": "Hi Again",
        "content": "Just wanted to check on you",
        "isRead": true,
    },
    {
        "subject": "Hi Friend",
        "content": "Just wanted to let you know I'm good",
        "isRead": false,
    }
];



app.get('/inbox', async (req, res) => {
    try {
        const mails = await Mail.find();
        if (mails.length == 0) {
            //I'm saving predefined mails so that we return them instead of empty object
            msgs.map(async msg => {
                const mail = Mail(
                    {
                        subject: msg.subject,
                        content: msg.content,
                        isRead: msg.isRead,
                    }
                );
                await mail.save();
            });
            const mails = await Mail.find();
            res.json(mails);
        }
        res.json(mails);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/user', async (req, res) => {
    const { name, lastName } = req.query;
    await setTimeout(1200, '');//I'm delaying it so, we can show the spinner in the frontend
    try {
        const users = await User.find();
        //Checks if a there is at least one user registered if not, register a predefined user.
        if (users.length == 0) {
            const firstUser = User({
                name: "Jerry",
                lastName: "Banga"
            });
            await firstUser.save();
            res.json(firstUser);
        }

        const user = await User.findOne({ name: name, lastName: lastName });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

});


app.listen(3001, () => console.log("Server started on port 3001"));