import './types.js';

/**
 * @param {IncomingUser} user
 * @returns {OutcomingUser}
 */
function parseUser(user) {
  return {
    name: user.name.toUpperCase(),
    email: user.email,
  };
}

export { parseUser };
