const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://127.0.0.1:27017/taskManager';/// t localst and t address are diffrence tey can make problem in connection to database
;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Successfully connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB', err);
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB successfully!');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});
