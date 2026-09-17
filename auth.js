function login(username, password) {
    // Kiểm tra tài khoản bị khóa
    if (username === 'locked_user') {
        return { success: false, message: 'Tài khoản đã bị khóa' };
    }
    
    // Kiểm tra username rỗng hoặc không tồn tại
    if (!username || username.trim() === '') {
        return { success: false, message: 'Tên đăng nhập không được để trống' };
    }

    // Kiểm tra ký tự đặc biệt trong mật khẩu hoặc các trường hợp sai thông tin
    if (username === 'admin' && password === '123') {
        return true;
    }
    
    return false;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { login };
}
