// utils/authCache.js

const KEY = "app_auth_user";
const TTL_MS = 48 * 60 * 60 * 1000; // 48 hours

// Save user info to cache
export function saveUserToCache({ displayName, email }) {
  const payload = {
    displayName,
    email,
    expiresAt: Date.now() + TTL_MS,
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(payload));
  } catch (e) {
    console.error("Failed to save auth cache:", e);
  }
}

// Get user info from cache
export function getUserFromCache() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;

    const payload = JSON.parse(raw);

    if (!payload.expiresAt || Date.now() > payload.expiresAt) {
      localStorage.removeItem(KEY);
      return null;
    }

    return { displayName: payload.displayName, email: payload.email };
  } catch (e) {
    console.error("Failed to read auth cache:", e);
    return null;
  }
}

// Clear cache (logout)
export function clearUserCache() {
  try {
    localStorage.removeItem(KEY);
  } catch (e) {
    console.error("Failed to clear auth cache:", e);
  }
}
