# QuadGen Wireless Solutions — Awareness Training Portal

This folder contains the complete employee awareness training portal:

- **index.html** — the main page (login, home, both training modules, quizzes, certificates)
- **styles.css** — all styling
- **app.js** — all interactive logic (login, topic navigation, quizzes, scoring, certificate generation)
- **logo.png** — the QuadGen Wireless Solutions logo used throughout the portal

## How to view it locally

Just double-click `index.html` and it will open in your default web browser. No installation or server required.

## How to make it publicly available to employees

Upload all four files (keeping them together in the same folder) to any standard web host, for example:

- Your company's web server or intranet
- Netlify, Vercel, or GitHub Pages (drag-and-drop deploy)
- Any shared hosting / static site service

Once uploaded, share the resulting URL with employees. The portal works entirely in the browser — no database or backend is required for the current version.

## Notes and limitations

- **Login is for identification only.** The name, employee ID and email entered are not verified against a company directory — they exist so they can be printed on the completion certificate. If you need real authentication, that requires a backend to be added.
- **No data is saved between browser sessions.** Quiz answers, scores, and login state reset if the page is refreshed or closed. To track completions across employees over time (e.g. an admin dashboard of who has passed), a database and server-side component would need to be built — let me know if you'd like help scoping that out.
- **Certificates** are generated in-browser and can be saved as a PDF using the "Print / save as PDF" button on the certificate screen (this uses the browser's built-in print-to-PDF).

## Assessment pass marks

- Compliance & Workplace Conduct Awareness: 15 questions, pass mark 10/15
- Cyber Security Awareness: 25 questions, pass mark 20/25

## Viewing employee results (admin)

This portal reports every quiz submission (name, employee ID, email, module, score, percentage, pass/fail, timestamp) to a Google Sheet, which acts as your admin view — no login system needed.

**Setup (one-time):**

1. Create a new Google Sheet with these column headers in row 1:
   `Timestamp | Name | Employee ID | Email | Module | Score | Total Questions | Percentage | Result`
2. In that Sheet, go to **Extensions → Apps Script**, delete any existing code, and paste in the contents of `google_apps_script.gs` (included in this folder).
3. Click **Deploy → New deployment → Web app**. Set "Who has access" to **Anyone**, then click **Deploy** and authorize it.
4. Copy the Web app URL it gives you (ends in `/exec`).
5. Open `app.js` and find this line near the `reportResultToSheet` function:
   ```
   var RESULTS_WEBAPP_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
   ```
   Replace the placeholder text with the URL you copied, keeping the quotes.
6. Re-upload the updated `app.js` to your GitHub repo (replacing the old one).

Once this is set up, every employee's submission will automatically appear as a new row in your Google Sheet — just open the Sheet anytime to see results, sort by score, filter by pass/fail, etc.

**Important — if you already had the portal live before this update:** the `google_apps_script.gs` file has been upgraded to support duplicate prevention and the admin dashboard. You need to:
1. Open your existing Apps Script project (Extensions → Apps Script from your Sheet)
2. Select all the existing code and replace it entirely with the new `google_apps_script.gs` contents
3. Click **Deploy → Manage deployments** (not "New deployment")
4. Click the pencil/edit icon on your existing deployment
5. Under "Version," choose **New version**, then click **Deploy**

Using "Manage deployments → edit → new version" keeps your existing Web app URL the same, so you don't need to change anything in `app.js`. If you instead create a brand new deployment, you'll get a different URL and will need to update `RESULTS_WEBAPP_URL` in `app.js` to match.

**Note:** Since there's still no employee authentication, results are self-reported (an employee could type any name/ID, though the Employee ID field now enforces the `QGI` + 3-digit format, and email is locked to `@quadgenwireless.com`). If you need verified identity down the line, that would require a company SSO/login integration — a bigger project we can scope separately if needed.

## Admin dashboard (built into the portal)

There's now an **Admin login** button on the home page (top right). Click it and enter the admin password to see a dashboard listing every employee's training records — module, score, percentage, pass/fail, and a **Modify** button to correct any record's score directly (e.g. if you need to manually override a result).

- The admin password is set in `app.js`:
  ```
  var ADMIN_PASSWORD = "QuadGenAdmin@2026";
  ```
  **Change this to your own password** before deploying, and keep it private — this is a simple client-side gate, not enterprise-grade authentication, so don't use it to protect highly sensitive data.
- **Duplicate prevention:** each employee gets exactly one row per module in the Sheet. If they fail and retake, their existing row is updated (not duplicated). If they've already passed, the portal won't let them retake the module at all — clicking it just shows their certificate again.
- If you had test/duplicate rows in the Sheet from before this update, you may want to manually clean those up once — going forward, no new duplicates will be created.


