const axios = require('axios');
require('dotenv').config();

class ActiveCampaignService {
    constructor() {
        this.apiKey = process.env.AC_API_KEY;
        this.baseUrl = process.env.AC_URL;
        this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Api-Token': this.apiKey
            }
        });
    }

    async getAccounts() {
        try {
            const response = await this.axiosInstance.get('/accounts');
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching accounts: ${error.message}`);
        }
    }
}

module.exports = ActiveCampaignService;
