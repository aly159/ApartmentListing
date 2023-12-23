const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  _id: 
  { type: String,
     default: () => new mongoose.Types.ObjectId().toString() 
    },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  numberOfBedrooms: {
    type: Number,
    required: true
  },
  numberOfBathrooms: {
    type: Number,
    required: true
  },
  area: {
    type: Number,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  },
}, { timestamps: true });

const apartment = mongoose.model('apartment', apartmentSchema);
module.exports = apartment;