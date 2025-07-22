// backend/app.js

// ─── 1) Core imports ─────────────────────────────────────────────────────────
const express      = require('express');
const contactRoutes = require('./routes/contact');

const path         = require('path');
const cors         = require('cors');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
require('dotenv').config();

// ─── 2) Database ────────────────────────────────────────────────────────────
const mongoose      = require('mongoose');
const projectRoutes = require('./routes/projects');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// ─── 3) App init ────────────────────────────────────────────────────────────
const app = express();

// ─── 4) Global middleware ──────────────────────────────────────────────────
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ─── 5) API routes ──────────────────────────────────────────────────────────
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);


// ─── 6) (Optional) Other routers ───────────────────────────────────────────
// If you still need your old routes, import & mount them here:
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// ─── 7) Serve React build ───────────────────────────────────────────────────
app.use(
  express.static(path.join(__dirname, '../frontend/build'))
);
app.get('*', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../frontend/build', 'index.html')
  );
});

// ─── 8) Export ──────────────────────────────────────────────────────────────
module.exports = app;
