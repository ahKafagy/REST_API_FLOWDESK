import axios from "axios";

export class DeltaAvailableTokenService {
    availableToken: string = "Valid Token :";
    
    getAllAvailableToken = async (): Promise<string> => {
        try {
            // GET request to fetch tokens from the KuCoin API
            const availableTokens = await axios.get(`https://api.kucoin.com/api/v2/symbols`);
            
            // Extracting token data from the response
            const availableDataTokens = availableTokens.data.data;

            for (let i = 0; i < availableDataTokens.length; i++) {
                const availableDataToken = availableDataTokens[i];
                if (i != availableDataTokens.length - 1) {
                    this.availableToken += "[" + availableDataToken.symbol + "]" + "|";
                } else {
                    this.availableToken += availableDataToken;
                }
            }
            return this.availableToken;
        } catch (error) {
            throw error;
        }
    }
}
