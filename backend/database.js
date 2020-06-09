const mongoose = require('mongoose');
const localConnection = "mongodb://127.0.0.1/todolist";
const connection = process.env.MONGODB_URI || localConnection;
mongoose.connect(
    connection,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)
.then(() => console.log("Database Connected Successfully"))
.catch(err => console.log(err));