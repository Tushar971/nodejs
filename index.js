const express = require('express');
const { path } = require('express/lib/application');
const app = express();
const config = require('config');
// app.put();
// app.get();
// app.post();
// app.delete();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4,5]);
})
config.get('PORT');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening to port ${port}...`);
})