const { controller } = require('./controllers');
const axios = require('axios');
jest.mock('axios');

describe('GET /api/test', () => {
    it('should return a list of accounts with status 200', async () => {
        axios.get.mockResolvedValue({
            data: {
                accounts: [{ id: 1, name: 'Test Account' }],
                meta: { total: 1 }
            }
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
        axios.get.mockRejectedValue(new Error('API request failed'));

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await controller(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: 'Error fetching accounts: API request failed'
        });
    });
});
