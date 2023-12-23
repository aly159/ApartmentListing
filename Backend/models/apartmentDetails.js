const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartmentDetailsSchema = new Schema({
    apartmentId: {
    type: String,
    required: true,
  },
  floorNumber: {
    type: Number,
    required: true,
  },
  hasBalcony: {
    type: Boolean,
    required: true
  },
  isFurnished: {
    type: Boolean,
    required: true
  },
  hasParking: {
    type: Boolean,
    required: true
  },
}, { timestamps: true });

const apartmentDetails = mongoose.model('apartmentDetails', apartmentDetailsSchema);
module.exports = apartmentDetails;