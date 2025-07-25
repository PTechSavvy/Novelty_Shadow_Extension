document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const domain = new URL(tabs[0].url).hostname.replace("www.", "");

    fetch(chrome.runtime.getURL("appData.js"))
      .then(res => res.text())
      .then(text => {
        eval(text); // defines `appData` globally
        const entry = appData.unapprovedApps.find(app => domain.includes(app.domain));
        const info = document.getElementById("info");

        if (entry) {
          const riskClass = entry.riskScore.toLowerCase();
          info.innerHTML = `
            <div><span class="icon">❌</span><strong>Unapproved App:</strong> ${entry.domain}</div>
            <div><span class="icon">✅</span><strong>Suggested Alternative:</strong> ${entry.suggestion}</div>
            <div><span class="icon">🧾</span><strong>Reasons:</strong>
              <ul>${entry.reasons.map(r => `<li>${r}</li>`).join("")}</ul>
            </div>
            <div><span class="icon">⚠️</span><strong>Risk Score:</strong> <span class="${riskClass}">${entry.riskScore.toUpperCase()}</span></div>
            <div><span class="icon">🛡</span><strong>Vulnerabilities:</strong>
              <ul>${entry.vulnerabilities.map(v => `<li>${v}</li>`).join("")}</ul>
            </div>
          `;
        } else {
          info.innerHTML = "<p>✅ This domain appears safe and approved.</p>";
        }
      });
  });
});
