import axios from "axios";
import { DeltaService } from "../services/KucoinDeltaService";
//Test DeltaService Class
describe("DeltaService", () => {
  //Test delta compute function
  describe("calculateCumulativeDelta", () => {

    //Test 1 / none token buy
    test("calculates cumulatives delta for none token buy", async () => {
      const deltaService: DeltaService = new DeltaService();
      const pair: string = "BTC-USDT";
      const simTrades: any = {
        data: {
          data: [{ side: "buy", size: "0" }],
        },
      };

      jest.spyOn(axios, "get").mockResolvedValueOnce(simTrades);

      const delta: number = await deltaService.calculateCumulativeDelta(pair);
      expect(delta).toBe(0);
    });
    //--------------------------------------------------------------------------

    //Test 2 / 2 token buy
    test("calculates cumulative delta correctly for buy trades", async () => {
      const deltaService: DeltaService = new DeltaService();
      const pair: string = "BTC-USDT";
      const simTrades: any = {
        data: {
          data: [{ side: "buy", size: "2" }],
        },
      };

      jest.spyOn(axios, "get").mockResolvedValueOnce(simTrades);

      const delta: number = await deltaService.calculateCumulativeDelta(pair);
      expect(delta).toBe(2);
    });
    //--------------------------------------------------------------------------

    //Test 2 / 2 token buy ; 5 token sell
    test("calculates cumulative delta correctly for sell trades", async () => {
      const deltaService: DeltaService = new DeltaService();
      const pair: string = "BTC-USDT";
      const simTrades: any = {
        data: {
          data: [
            { side: "buy", size: "2" },
            { side: "sell", size: "5" },
          ],
        },
      };

      jest.spyOn(axios, "get").mockResolvedValueOnce(simTrades);

      const delta: number = await deltaService.calculateCumulativeDelta(pair);
      expect(delta).toBe(-3);
    });
    //--------------------------------------------------------------------------

    //Test 4 / trades not found for a pair
    test("throws error if no trades are found for the pair", async () => {
      const deltaService: DeltaService = new DeltaService();
      const pair: string = "ETH-BTC";
      const simTrades: any = { data: { data: [] } };

      jest.spyOn(axios, "get").mockResolvedValueOnce(simTrades);

      await expect(deltaService.calculateCumulativeDelta(pair)).rejects.toThrow(
        "Does not exist"
      );
    });
    //--------------------------------------------------------------------------
  });
});
