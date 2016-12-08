# Local Weather App

This is my solution to one of the 'Intermediate Front End Development Projects' at [FreeCodeCamp](https://www.freecodecamp.com)

You can click here to visit the projects page <https://schoettker.github.io/local-weather-app/>

When a vendor changes his policy it might affect one of these project, if you notice a broken/bugged project please let me know (or submit a PR if you want :P)

I used OpenWeatherMap to get a weather forecast but they decided that a https request (and therefore security) should be a premium feature (starting at 180$/month). Anyway, since Github Pages are ssl-encrypted, I use a great service called [crossorigin.me](https://crossorigin.me/) which basically is a workaround to allow cross-origin requests, to bypass the browser capability of blocking a mixed content request.

#### Edit:
[The developer](https://github.com/technoboy10) of [crossorigin.me](https://crossorigin.me/) is currently having some trouble and university keeps him busy, so the XMLHttpRequest in this project is currently blocked by most browsers.
