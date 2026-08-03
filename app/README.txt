LOGGERS DEPOT PHONE APP (auto-refresh)
======================================

This is the phone-facing app. It loads specials from GitHub and
refreshes WITHOUT force-closing:

  • Every time you open / return to the app (if data is older than 15 min
    or the calendar day changed)
  • While left open: every 6 hours
  • Around 8:00 AM, 2:00 PM, and 6:00 PM local time
  • Anytime you tap the refresh button

Live URLs (after publish to GitHub):
  https://cdn.jsdelivr.net/gh/Ken48661/loggers-depot-feed@main/app/index.html
  https://raw.githack.com/Ken48661/loggers-depot-feed/main/app/index.html

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
