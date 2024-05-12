import axios from "axios";

export class DeltaService {
  public cumulativeDelta: number = 0.0;

  calculateCumulativeDelta = async (pair: string): Promise<number> => {
    try {
      // GET request to fetch trade history data from the KuCoin API
      const trades = await axios.get(`https://api.kucoin.com/api/v1/market/histories?symbol=${pair}`);
      const tradesData = trades.data.data;
      if(tradesData.length == 0){
        throw new Error("Does not exist");
      }

      for (let i = 0; i < tradesData.length; i++) {
        const trade = tradesData[i];
        // Calculating cumulative delta based on trade side
        if (trade.side === "buy") {
          this.cumulativeDelta += parseFloat(trade.size);
        } else if (trade.side === "sell") {
          this.cumulativeDelta -= parseFloat(trade.size);
        }
      }
      return this.cumulativeDelta;
    } catch (error) {
      throw error;
    }
  };
}
