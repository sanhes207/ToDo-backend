const express = require('express');
const cookieParser = require('cookie-parser');

const taskRouter = require('./routes/task.routes');
const userRouter = require('./routes/user.routes');
const categoryRouter = require('./routes/category.routes');


const PORT = 8080;
const APP = express();
const cors = require('cors');
const corsOptions = {
	origin:'*',
	credentials:true,            //access-control-allow-credentials:true
	optionSuccessStatus:200,
}

APP.use(express.json());
APP.use(cookieParser());
APP.use(cors(corsOptions));

APP.use('/api', taskRouter);
APP.use('/api', userRouter);
APP.use('/api', categoryRouter);

APP.listen(PORT, () => console.log('Сервер вас слушает...'));