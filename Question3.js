const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

function checkPhoneNumber(phoneNumber) {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    if (regex.test(phoneNumber)) {
        return 'The number entered was correctly entered!';
    } else {
        return 'The number entered was incorrectly entered!';
    }
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Question3.html'));
});

app.get('/checkPhoneNumber', (req, res) => {
    const input = req.query.phoneNumber; 
    const result = checkPhoneNumber(input);
    res.send(`RESULT checkPhoneNumber: ${result}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
