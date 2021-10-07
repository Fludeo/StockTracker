require('dotenv').config();
const express = require('express');
const ConfigDIC = require('./config/di');
const { initDefaultModule } = require('./module/default/module');
const { initProductModule } = require('./module/product/module');

const container = ConfigDIC();

const ONE_WEEK_IN_SECONDS = 604800000;
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: ONE_WEEK_IN_SECONDS },
};

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('./public', express.static('public'));
app.use(container.get('Session')(sessionOptions));
const port = process.env.PORT || 3000;
initDefaultModule(container, app);
initProductModule(container, app);

app.use((req) => { console.log(`llamada con verbo ${req.method} a ${req.path}`); });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
