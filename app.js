const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/mongodb');
require('./models/Cadre');

connectDB();
dotenv.config();
const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

app.use('/api/v1/cadres', require('./routes/cadres'));

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
