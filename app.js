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

// app.use('/api/v1/auth', require('./routes/auth'));
// app.use('/api/v1/wallet', require('./routes/wallet'));
// app.use('/api/v1/users', require('./routes/users'));

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
