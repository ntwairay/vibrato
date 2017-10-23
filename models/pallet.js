import mongoose, { Schema } from 'mongoose';

// Define pallet schema
var palletSchema = new Schema({
  pallet_number: {
    type: String,
    unique: true,
  },
  product_code: String,
  product_name: String,
});

// Export Mongoose model
export default mongoose.model('pallet', palletSchema);
