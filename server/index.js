require("dotenv").config();
const express = require('express');
const PORT = process.env.PORT || 5000
const router = require('./routes/index');
const cors = require('cors');
const sequelize = require('./db');
const models = require('./models/models');
const fileUpload = require('express-fileupload');
const path = require('path');
const errorHandler = require('./middleware/ErrorHandler');

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(cors());
app.use(fileUpload({}));
app.use('/api', router);

// Обработка ошибок. Последний middleware
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, console.log(`server has been started on PORT: ${PORT}...`));
        console.log('Соединение с БД было успешно установлено');
      } catch (e) {
        console.log('Невозможно выполнить подключение к БД: ', e);
      }
};

start();