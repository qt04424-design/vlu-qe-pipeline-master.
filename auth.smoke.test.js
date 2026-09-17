const { login } = require('./auth');

describe('Smoke Test - Core Authentication', () => {
  test('Should return true on valid credentials (admin/123)', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
