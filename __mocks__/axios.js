const axios = {
  get: jest.fn(() => Promise.resolve({ data: { accounts: [{ id: 1, name: 'Test Account' }], meta: { total: 1 } } }))
};

module.exports = axios;
