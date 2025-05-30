

const LOGIN_KEY = 'isLoggedIn';

export function storeLoginStatus() {
  localStorage.setItem(LOGIN_KEY, 'true');
}

export function getStoredLoginStatus() {
  return localStorage.getItem(LOGIN_KEY) === 'true';
}

export function clearLoginStatus() {
  localStorage.removeItem(LOGIN_KEY);
}
