import express, { Router } from 'express';
import { DeltaController } from './controllers/deltaController';

export const deltaRouter = express.Router();
const deltaController:DeltaController = new DeltaController();

deltaRouter.get('/KucoinCumulativeDelta/:pair',deltaController.getDelta);

export default deltaRouter
