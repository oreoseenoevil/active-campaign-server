const ActiveCampaignService = require('../services');

async function controller(req, res) {
    try {
        const activeCampaignService = new ActiveCampaignService();
        const accounts = await activeCampaignService.getAccounts();
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { controller };
