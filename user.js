// ZEN WORKHORSE PROFILE
// Last updated: 2025-06-20

// --- Privacy & Blockers ---
user_pref("network.cookie.cookieBehavior", 1);  // Block 3rd-party cookies
user_pref("privacy.firstparty.isolate", true);  // Isolate cookies per site
user_pref("privacy.trackingprotection.enabled", true);  // Block trackers
user_pref("privacy.clearOnShutdown.cookies", false);  // Keep login cookies
user_pref("network.http.referer.XOriginPolicy", 2);  // Prevent referer leaks
user_pref("dom.event.clipboardevents.enabled", false);  // Block clipboard spying

// --- Networking & IP Leak Protection ---
user_pref("media.peerconnection.enabled", false);  // Disable WebRTC
user_pref("geo.enabled", true);  // Allow geolocation (maps, weather)
user_pref("dom.battery.enabled", false);  // Disable battery fingerprinting

// --- Performance/UX tweaks ---
user_pref("network.prefetch-next", false);  // Disable DNS prefetching
user_pref("browser.shell.checkDefaultBrowser", false);  // No default-browser prompt
