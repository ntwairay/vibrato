import mongoose from 'mongoose';
import Pallet from './pallet.js';

const pallets = [
  {
    pallet_number: '102',
    product_code: 'AB13020',
    product_name: 'CJ-190M5 Coles Cocktail Truss',
  },
  {
    pallet_number: '103',
    product_code: 'AB13023',
    product_name: 'CJ-190M5 Woolies Cocktail Truss',
  },
  {
    pallet_number: '104',
    product_code: 'AB13024',
    product_name: 'CJ-190M3 Big W Hallowin',
  },
  {
    pallet_number: '105',
    product_code: 'AB13027',
    product_name: 'CJ-190MA Banana Container',
  },
  {
    pallet_number: '106',
    product_code: 'AB1302345',
    product_name: 'Watermelon Container',
  },
  {
    pallet_number: '107',
    product_code: 'DFD12231',
    product_name: 'Mongo Container',
  },
  {
    pallet_number: '108',
    product_code: 'AB133424',
    product_name: 'CJ-22233 Hong Kong market Container',
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/pallet');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Go through each pallet
pallets.map(data => {
  // Initialize a model with pallet data
  const pallet = new Pallet(data);
  // and save it into the database
  pallet.save();
});
console.log("finished upload dummy data")
db.close()
