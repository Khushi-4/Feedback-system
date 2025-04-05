const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Feedback = require('./models/feedback'); // Changed variable name to Feedback

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/coderone_feedback', {
    
})
.then(() => console.log('MongoDb connected'))
.catch(err => console.error('MongoDb connection error', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/submit-feedback', async (req, res) => {
    const { name, contactNumber, email, feedback: feedbackText} = req.body;
    const feedback = new Feedback({ // Changed to avoid overwriting the 'feedback' variable
        name,
        contactNumber,
        email,
        feedback: feedbackText
    });

    try {
        await feedback.save();
        console.log('Feedback saved successfully');
        res.send(`
            <html>
                <head>
                    <title>Feedback Submitted</title>
                </head>
                <body>
                    <h1>Thank You</h1>
                    <p>Your Feedback has been successfully submitted.</p>
                    <a href="/">Go Back to Form</a>
                </body>
            </html>
        `); // Sending HTML as a string
    } catch (err) {
        console.error('Error saving feedback:', err);
        res.status(500).send('There was an error in submitting your feedback.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
 