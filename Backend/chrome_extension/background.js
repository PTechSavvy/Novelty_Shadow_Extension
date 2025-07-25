const API_BASE_URL = "https://novelty-backend.onrender.com";

const DEFAULT_APPROVED_APPS = [
  "docs.google.com",
  "drive.google.com",
  "outlook.office.com",
  "teams.microsoft.com"
];

const DEFAULT_USER = "hackathon-user@example.com";

// Initialize approved apps list on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ approvedApps: DEFAULT_APPROVED_APPS }, () => {
    console.log("✅ Approved apps initialized.");
  });
});

// Listen to tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    handleTabUpdate(tab.url, tabId);
  }
});

// Main logic to detect unapproved domains
function handleTabUpdate(url, tabId) {
  const domain = new URL(url).hostname;

  chrome.storage.local.get("approvedApps", (data) => {
    const approvedApps = data.approvedApps || [];
    const isApproved = approvedApps.some(approvedDomain => domain.includes(approvedDomain));

    if (!isApproved) {
      // Set popup only for unapproved
      chrome.action.setPopup({ tabId, popup: "popup.html" });

      // Show red badge icon
      chrome.action.setBadgeText({ tabId, text: "!" });
      chrome.action.setBadgeBackgroundColor({ tabId, color: "#FF0000" });

      // Store last unapproved domain (for content script)
      chrome.storage.local.set({ lastUnapproved: domain });

      // Log to backend
      logUnapprovedDomain(domain);
    } else {
      // Clear badge and popup if it's approved
      chrome.action.setBadgeText({ tabId, text: "" });
      chrome.action.setPopup({ tabId, popup: "" });
    }
  });
}

// POST to backend to log unapproved visit
function logUnapprovedDomain(domain) {
  fetch(`${API_BASE_URL}/log`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      domain,
      userAgent: navigator.userAgent,
      user: DEFAULT_USER
    })
  }).then(() => {
    console.log(`📡 Logged unapproved domain: ${domain}`);
  }).catch(err => {
    console.error("❌ Failed to log to backend:", err);
  });
}
