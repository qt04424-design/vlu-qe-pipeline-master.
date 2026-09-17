const { login } = require('./auth');

describe('Regression Tests cho chức năng Login', () => {
    test('Đăng nhập thất bại khi sai mật khẩu', () => {
        expect(login('admin', 'wrong_password')).toBe(false);
    });

    test('Đăng nhập thất bại khi sai tên đăng nhập', () => {
        expect(login('wrong_user', '123')).toBe(false);
    });

    test('Đăng nhập thất bại khi tên đăng nhập bị để trống', () => {
        const result = login('', '123');
        expect(result.success).toBe(false);
    });

    test('Đăng nhập thất bại khi mật khẩu chứa ký tự đặc biệt không hợp lệ', () => {
        expect(login('admin', '123!@#$')).toBe(false);
    });

    test('Đăng nhập thất bại khi tài khoản đã bị khóa', () => {
        const result = login('locked_user', '123');
        expect(result.success).toBe(false);
    });
});
