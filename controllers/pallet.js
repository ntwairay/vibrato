import Pallet from '../models/pallet';
import moment from 'moment';

export const index = (req, res, next) => {
  // Find all pallets and return json response
  Pallet.find().lean().exec((err, pallets) => res.json(
    // Iterate through each pallet
    { pallets: pallets.map(pallet => ({
      ...pallet,
    }))}
  ));
};
