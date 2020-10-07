const binanceController = require('../controllers/binanceController')
//users  API
app.post('/generateAddressForUser',  binanceController.generate );
