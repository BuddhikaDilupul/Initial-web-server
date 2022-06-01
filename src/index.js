const app = require('./services/express')
const mongooseConnection = require('./services/mongoose')
app.start();
mongooseConnection.start();
//please add email and mongo url to env file