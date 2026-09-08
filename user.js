// ZEN WORKHORSE PROFILE
// Last updated: 2025-06-20

// --- Privacy & Blockers ---
user_pref("network.cookie.cookieBehavior", 1);  // Block 3rd-party cookies
user_pref("privacy.firstparty.isolate", false);  // MODIFIED: Changed to false to fix Google OAuth sign-in loops
user_pref("privacy.trackingprotection.enabled", true);  // Block trackers
user_pref("privacy.clearOnShutdown.siteSettings", false);
user_pref("privacy.sanitize.sanitizeOnShutdown", false);

user_pref("privacy.clearOnShutdown.cookies", false);  // Keep login cookies
user_pref("network.http.referer.XOriginPolicy", 1);  // MODIFIED: Changed to 1 (base domain only) so cross-site logins work
user_pref("dom.event.clipboardevents.enabled", true);  // MODIFIED: Changed to true to prevent copy/paste breaking in web apps

// --- Networking & IP Leak Protection ---
user_pref("media.peerconnection.enabled", false);  // Disable WebRTC
user_pref("geo.enabled", true);  // Allow geolocation (maps, weather)
user_pref("dom.battery.enabled", false);  // Disable battery fingerprinting

// --- Performance/UX tweaks ---
user_pref("network.prefetch-next", false);  // Disable DNS prefetching
user_pref("browser.shell.checkDefaultBrowser", false);  // No default-browser prompt

