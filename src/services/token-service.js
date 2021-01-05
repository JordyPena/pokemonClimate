import config from "../config";

export default {
  saveAuthToken(token) {
    if (!token) return;
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return Boolean(this.getAuthToken());
  },
};