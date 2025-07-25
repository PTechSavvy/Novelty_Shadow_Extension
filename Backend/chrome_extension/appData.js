const appData = {
  unapprovedApps: [
    {
      domain: "notion.so",
      riskScore: "red",
      suggestion: "Confluence",
      reasons: [
        "Stores sensitive data on third-party servers",
        "No SSO integration",
        "Has history of data breaches"
      ],
      vulnerabilities: [
        "CVE-2024-1122 - Remote code execution (Patched)",
        "CVE-2023-9972 - Insecure token handling (Still exploitable)"
      ]
    },
    {
      domain: "wetransfer.com",
      riskScore: "red",
      suggestion: "Google Drive",
      reasons: [
        "No encryption-at-rest",
        "Files publicly accessible with link",
        "No SSO support"
      ],
      vulnerabilities: [
        "CVE-2024-1001 - Token leakage via shared URLs",
        "CVE-2023-8890 - Persistent XSS (patched)"
      ]
    },
    {
      domain: "dropbox.com",
      riskScore: "yellow",
      suggestion: "OneDrive",
      reasons: [
        "Basic SSO requires enterprise plan",
        "Shared folders vulnerable to accidental exposure"
      ],
      vulnerabilities: [
        "CVE-2024-0456 - Directory traversal (patched)"
      ]
    }
  ]
};
