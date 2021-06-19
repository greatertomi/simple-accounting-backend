const mongoose = require('mongoose');

const cadreSchema = new mongoose.Schema({
  cadreName: {
    type: String,
    required: true
  },
  deductions: [
    {
      name: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true,
        default: 0
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('cadres', cadreSchema);
