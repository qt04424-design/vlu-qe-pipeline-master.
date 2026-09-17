const { login } = require('./auth');

describe('Regression Test - Edge Cases & Exception Handling', () => {
  test('Should throw error when password is wrong', () => {
    expect(() => login('admin', 'wrongpass')).toThrow('Invalid credentials');
  });

  test('Should throw error when username is empty', () => {
    expect(() => login('', '123')).toThrow('Username cannot be empty');
  });

  test('Should throw error when password is empty', () => {
    expect(() => login('admin', '')).toThrow('Password cannot be empty');
  });

  test('Should throw error when username contains special characters', () => {
    expect(() => login('admin@#$%^', '123')).toThrow('Invalid credentials');
  });

  test('Should throw error when account is locked', () => {
    expect(() => login('locked_admin', '123')).toThrow('Account is locked');
  });
});
