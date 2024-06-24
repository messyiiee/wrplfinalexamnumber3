const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('sport_center.db');

app.use(bodyParser.json());
app.use(express.static('public'));

// Fetch events
app.get('/events', (req, res) => {
    db.all("SELECT * FROM events", [], (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json(rows);
    });
});

// Fetch packages for an event
app.get('/packages/:event_id', (req, res) => {
    const event_id = req.params.event_id;
    db.all("SELECT * FROM packages WHERE event_id = ?", [event_id], (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json(rows);
    });
});

// Process payment (dummy endpoint for now)
app.post('/pay', (req, res) => {
    const { user_id, packages } = req.body;
    const payment_status = "Success"; // Simulated payment status

    // Calculate total amount
    let transaction_amount = packages.reduce((total, pkg) => total + pkg.price, 0);

    db.run(`INSERT INTO transactions (user_id, package_id, transaction_date, transaction_amount, payment_status)
            VALUES (?, ?, datetime('now'), ?, ?)`,
        [user_id, packages[0].package_id, transaction_amount, payment_status],
        function(err) {
            if (err) {
                res.status(500).json({error: err.message});
                return;
            }
            // Simulate redirect to a payment gateway
            res.json({payment_url: `https://payment-gateway.example.com/pay?amount=${transaction_amount}`});
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});