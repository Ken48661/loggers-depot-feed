LOGGERS DEPOT PHONE APP (auto-refresh)
======================================

This is the phone-facing app. It loads specials from GitHub and
refreshes WITHOUT force-closing:

  • Every time you open / return to the app
  • While left open: every 30 minutes
  • If specials are still yesterday, re-check every 5 minutes
  • Around 8:00 AM, 2:00 PM, and 6:00 PM local time
  • Anytime you tap the refresh button

Live URLs (after publish to GitHub):
  https://cdn.jsdelivr.net/gh/Ken48661/loggers-depot-feed@main/app/index.html
  https://raw.githack.com/Ken48661/loggers-depot-feed/main/app/index.html

If the app says "Not today's specials yet", the office PC
(WORK-KENS-HP-20) has not published a new Dropbox specials file.

Install on Android (Google phone):
  1. Open the URL above in Chrome
  2. Menu (⋮) → "Add to Home screen" / "Install app"
  3. Open from the home-screen icon (runs full-screen)

Install on iPhone:
  1. Open the URL in Safari
  2. Share → Add to Home Screen

Publish files to GitHub:
  Run:  Publish-PhoneApp-To-GitHub.ps1
  (in Loggers App Publisher folder)
