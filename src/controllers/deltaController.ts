import { Request, Response } from "express";
import { DeltaService } from "../services/KucoinDeltaService";
import { DeltaAvailableTokenService } from "../services/KucoinDeltaAvailableTokenService";

export class DeltaController {
  deltaAvailableTokenService: DeltaAvailableTokenService = new DeltaAvailableTokenService();
  deltaService: DeltaService = new DeltaService();

  getDelta = async (req: Request, res: Response): Promise<void> => {
    try {
      const pair = req.params.pair; // Assuming the trading pair is passed as a URL parameter
      
      // Calculating cumulative delta for the given trading pair
      const delta = await this.deltaService.calculateCumulativeDelta(pair);

      // Sending the calculated delta as JSON response
      res.json(delta);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error \n ndt:verify if the pair token exist in http://localhost:3001/AvailableToken" });
    }
  };
}
