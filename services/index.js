const axios = require('axios');
require('dotenv').config();

const ACTIVE_CAMPAIGN_API_KEY = process.env.AC_API_KEY;
const ACTIVE_CAMPAIGN_BASE_URL = process.env.AC_URL;

async function getAccounts() {
    try {
        const response = await axios.get(`${ACTIVE_CAMPAIGN_BASE_URL}/accounts`, {
            headers: {
                'Api-Token': ACTIVE_CAMPAIGN_API_KEY
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching accounts: ${error.message}`);
    }
}

module.exports = { getAccounts };
