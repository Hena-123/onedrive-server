const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

const DataSchema = new mongoose.Schema({
    Id: Number,
    Bank: String,
    FDNo: Number,
    AccountNo: Number,
    AccountHolder: String,
    OpeningDate: String,
    OpeningMonth: String,
    OpeningYear: String,
    MaturityDate: String,
    MaturityMonth: String,
    MaturityYear: String,
    OpeningAmount: Number,
    InterestRate: Number,
    Interest: Number,
    MaturityAmount: Number,
    Remarks: String,
});

const Data = mongoose.model('Data', DataSchema);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to store data
app.post('/storeData', (req, res) => {
    const data = req.body;

    // Save the data to MongoDB
    const newData = new Data(data);
    newData.save((err) => {
        if (err) {
            return res.status(500).send('Error saving data');
        }
        res.status(200).send('Data stored successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
