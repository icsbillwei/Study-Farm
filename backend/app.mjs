import createError from 'http-errors';
import express from 'express';import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.mjs';
import usersRouter from './routes/users.mjs';
import taskRouter from './routes/tasks.mjs';
import npcRouter from './routes/npc.mjs';


var app = express();

app.use(logger('dev'));
app.use(express.json()); // json body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', taskRouter)
app.use('/npc', npcRouter)


const port = 3033;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`HawkHacks app listening at http://localhost:${port}`);
});

export default app