const { controller } = require('./controllers');
const ActiveCampaignService = require('./services');
jest.mock('./services');

describe('GET /api/test', () => {
    beforeEach(() => {
        ActiveCampaignService.prototype.getAccounts = jest.fn();
    });

    it('should return a list of accounts with status 200', async () => {
        ActiveCampaignService.prototype.getAccounts.mockResolvedValue({
            accounts: [{ id: 1, name: 'Test Account' }],
            meta: { total: 1 }
        });

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await controller(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            accounts: [{ id: 1, name: 'Test Account' }],
            meta: { total: 1 }
        });
    });

    it('should handle errors and return status 500', async () => {
        ActiveCampaignService.prototype.getAccounts.mockRejectedValue(new Error('API request failed'));

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await controller(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: 'API request failed'
        });
    });
});