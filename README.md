# Honey Pomodoro Timer 💛🍯

A multi-page Pomodoro-style study timer built with vanilla HTML, CSS, and JavaScript. Pick a study duration, get a matching break time, and let the app guide you through a full study/break cycle — with pause, resume, reset, and an alarm sound when each stage ends.

## Features

- **Custom study/break pairing** — choose a study duration (25 to 90 minutes) and the app automatically calculates the matching break time (e.g. 25 min study → 5 min break, 90 min study → 20 min break)
- **Persistent state across pages** — the app is split across three pages (setup, timer, break) and uses `localStorage` to carry the user's chosen times between them without losing data on navigation
- **Full timer controls** — start, pause/resume, and reset, with the UI (icons and button text) updating to reflect the current state
- **Automatic stage transitions** — when the study countdown hits zero, the app plays a chime, calculates the break duration, and automatically navigates to the break page; the same logic runs the break countdown and returns the user to the start
- **Custom UI** — hand-built animations, a hover-animated start button, a custom CSS-drawn back arrow, and a honeycomb-themed visual design with a custom imported font

## Tech Stack

- **HTML5** — semantic multi-page structure
- **CSS3** — Flexbox, custom properties (CSS variables), keyframe animations, custom fonts
- **JavaScript (vanilla)** — DOM manipulation, event listeners, `setInterval`/`clearInterval` for countdown logic, the Web Audio API for sound, and `localStorage` for cross-page state

## Project Structure

```
honey_pomodoro/
├── index.html      # Setup page — choose study duration
├── timer.html       # Study countdown page — start/pause/reset
├── break.html        # Break countdown page
├── style.css          # Styles for setup page
├── timer.css          # Styles for timer page
├── break.css          # Styles for break page
├── java.js            # All app logic (timer, localStorage, DOM updates)
└── sparkling-chime-sound.mp3  # End-of-stage alarm sound
```

## How It Works

1. On the setup page, the user picks a study duration from a dropdown. The app instantly shows the matching break time and saves it in `localStorage`.
2. Clicking "Confirm" navigates to the timer page, which reads the saved study time from `localStorage` and displays it as a countdown.
3. The user can start, pause/resume, or reset the timer at any point.
4. When the countdown reaches zero, a chime plays and the app automatically redirects to the break page with the correct break duration.
5. The break page runs its own countdown, and when it finishes, `localStorage` is cleared and the user is returned to the setup page — ready for a new cycle.

## Running Locally

No build tools or dependencies required — it's pure HTML/CSS/JS.

1. Clone the repo
2. Open `index.html` in your browser

## What I Learned

This was my first project after HTML/CSS/JS fundamentals, and the main challenges were:
- Passing state between separate HTML pages using `localStorage` (rather than everything living in one page's memory)
- Managing timer state correctly so pause/resume/reset didn't create overlapping intervals or desync the displayed time
- Structuring conditional logic cleanly across multiple pages that share one JS file

## Author

Built by Supriya Sharma as a self-directed project following HTML/CSS/JS coursework.
