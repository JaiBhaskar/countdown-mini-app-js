# Countdown Timer

A small front-end countdown application built with HTML, CSS, and JavaScript. It displays the days, hours, minutes, and seconds remaining until a chosen date, while a progress bar shows how much time has elapsed.

## Features

- Live countdown updated every second
- Days, hours, minutes, and seconds display
- Animated elapsed-time progress bar
- Expired-state message when the target date is reached

## Run locally

Open `index.html` in any modern web browser.

## Customize the target date

In `script.js`, change the `endDate` value to the date and time you want to count down to:

```js
const endDate = new Date("3 July, 2025 00:05:00").getTime();
```

## Files

- `index.html` — page structure
- `style.css` — layout and visual styling
- `script.js` — countdown and progress-bar logic
