const mongoose = require('mongoose');

const cadreSchema = new mongoose.Schema({
  cadreName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
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
  ]
});

mongoose.model('cadre', cadreSchema);
