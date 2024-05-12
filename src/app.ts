import express, { Request, Response } from 'express';
import { errorHandler } from './utils/errorHandlers';
import { deltaRouter } from './routes';
import {DeltaAvailableTokenService}from "./services/KucoinDeltaAvailableTokenService";

const app = express();
const deltaAvailableTokenService : DeltaAvailableTokenService = new DeltaAvailableTokenService();
try{
  
//Cumulative delta for a specific trading pair
app.use('/delta',deltaRouter)

//Consulte available trading pair 
app.get('/AvailableToken', async (req: Request, res: Response) => {
    const availableTokens = await deltaAvailableTokenService.getAllAvailableToken();
    res.send(availableTokens);
});
}catch{
  app.use(errorHandler);
}
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Serveur démarré sur http://localhost:"+PORT);
});