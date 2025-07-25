
# 🚀 Novelty Verify

A Chrome Extension + Node.js server that detects Shadow IT use by flagging unapproved cloud services and logging usage to an admin dashboard.

---

## 🧩 Features

- Detects visits to unapproved cloud services
- Shows users risk scores, reasons, and vulnerabilities
- Logs all unapproved domain visits to a Node.js server
- Admin dashboard with auto-refreshing activity logs
- Optional file scanning (e.g., VirusTotal-ready)

---

## 🗂️ Folder Structure

```
Novelty_Verify/
├── extension/     # Chrome Extension
└── server/        # Node.js Server (for Render or local)
```

---

## 🧪 Local Development

### 1. Run Server Locally

```bash
cd server
npm install
node server.js
```

Server will run on `http://localhost:4000`

---

### 2. Load Extension

1. Open Chrome → `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `extension/` folder

---

## 🌐 Deploy to Render

1. Push this folder structure to a GitHub repo
2. Go to [Render.com](https://render.com/)
3. Click "New Web Service"
4. Connect your repo
5. Set:

   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Environment: `Node`
   - Auto deploy: ✅

---

## 🔗 Connect Extension to Render

Update `background.js` and `popup.html` fetch URLs to use your deployed Render server URL, e.g.:

```js
fetch("https://your-render-app.onrender.com/log", { ... });
```

---

## 📋 Admin Dashboard

Once server is running (locally or on Render):

Visit: `http://localhost:4000/admin` or `https://your-app.onrender.com/admin`

---

## 📎 Logo

- Used in extension popup: `icon128.png`
- Title: **Novelty Verify**

---

Built for rapid detection and visibility of Shadow IT in real-time.
