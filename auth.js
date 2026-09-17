/* Update login logic for feature branch testing */

function login(username, password) {
  if (!username || username.trim() === '') {
    throw new Error('Username cannot be empty');
  }

  if (!password || password.trim() === '') {
    throw new Error('Password cannot be empty');
  }

  const lockedUsers = ['locked_admin', 'user_banned'];
  if (lockedUsers.includes(username)) {
    throw new Error('Account is locked');
  }

  if (username === 'admin' && password === '123') {
    return true;
  }

  throw new Error('Invalid credentials');
}

module.exports = { login };
