import express, { Router } from 'express';
// Import index action from pallets controller
import { index } from '../controllers/pallet.js';

// Initialize the router
const router = Router();

// Handle /pallets.json route with index action from pallets controller
router.route('/pallets')
  .get(index);

export default router;
