const { login } = require('./auth');

test('Smoke Test: Đăng nhập thành công với thông tin hợp lệ (admin/123)', () => {
    const result = login('admin', '123');
    expect(result).toBe(true);
});
