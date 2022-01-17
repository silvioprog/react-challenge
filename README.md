# React Challenge

The goal of this exercise is to create a demo calendar application using React
and Redux.

![React challenge logo][react-challenge-logo]

Try the [production application at Vercel hosting][react-challenge-vercel-url]! 🗓️

## Desktop demonstration

![Desktop video demonstration][desktop-demo-video]

## Mobile demonstration

![Mobile video demonstration][mobile-demo-video]

## Features

- Ability to add "reminders" (max. 30 characters) for a day, time, and city
  specified by the user.
- Ability to edit reminders, including changing text, day, time, and city.
- Ability to access the [OpenWeather][open-weather-url] service and get the
  weather forecast (e.g. Rain) for the date of the calendar reminder based on
  the city.

## Bonus feature

[Progressive Web Application (PWA)][pwa-wiki-url] support.

![Progressive Web Application (PWA) logo][pwa-logo]

## Image optimization

PNG images optimized with [`optipng(1)`][optipng-man-url].

## CI/CD

By [GitHub integration with Vercel][ci-cd-url].

## Project setup

```bash
npm install
```

### Development

```bash
npm start
```

### Production

```bash
npm build
```

### Tests

```bash
npm test
```

[react-challenge-logo]: public/android-chrome-192x192.png 'React challenge logo'
[pwa-logo]: public/pwa.png 'Progressive Web Application (PWA) logo'
[desktop-demo-video]: https://github.com/silvioprog/react-challenge/raw/main/media/desktop-demo-video.gif 'Desktop video demonstration'
[mobile-demo-video]: https://github.com/silvioprog/react-challenge/raw/main/media/mobile-demo-video.gif 'Mobile video demonstration'
[react-challenge-vercel-url]: https://silvioprog-react-challenge.vercel.app 'Production application at Vercel hosting'
[open-weather-url]: https://openweathermap.org/forecast16 'OpenWeather forecast API'
[pwa-wiki-url]: https://en.wikipedia.org/wiki/Progressive_web_application 'Progressive Web (PWA) Application wiki'
[optipng-man-url]: https://linux.die.net/man/1/optipng 'OptiPNG man page'
[ci-cd-url]: https://github.com/silvioprog/react-challenge/deployments 'GitHub deployments'
