const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
  code: { 
    type: String, 
    required: true, 
    unique: true,
    index: true,
    trim: true
  },
  name: { 
    type: String, 
    required: true, 
    index: true,
    trim: true,
    minlength: 3
  },
  length: { 
    type: String, 
    required: true,
    trim: true
  },
  start: { 
    type: Date, 
    required: true,
    validate: {
      validator: function(value) {
        return value instanceof Date && value > new Date();
      },
      message: 'Start date must be a valid future date'
    }
  },
  resort: { 
    type: String, 
    required: true,
    trim: true
  },
  perPerson: { 
    type: Number,
    required: true,
    min: [0, 'Price must be positive'] 
  },
  image: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 10
  }
}, {
  timestamps: true
});

const Trip = mongoose.model('trips', tripSchema);
module.exports = Trip;
