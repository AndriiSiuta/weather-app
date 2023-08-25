# POLLING (BONUS)

```typescript
import { interval, map, switchMap } from 'rxjs';

const weahterApiUrl = 'https://api.open-meteo.com/v1/forecast';

async function getUsers() {
  const users = await fetch('https://randomuser.me/api/');

  return users.json();
}

async function getWeatherByLocation(lat, lon) {
  const weather = await fetch(
    `${weahterApiUrl}?latitude=${lat}&longitude=${lon}180&current_weather=true&hourly=temperature_2m`
  );

  return weather.json();
}

async function getWeatherState(user) {
  const { latitude, longitude } = user.results[0].location.coordinates;
  const weatherState = await getWeatherByLocation(latitude, longitude);

  return weatherState.current_weather.temperature;
}

getUsers().then((user) => {
  interval(5000)
    .pipe(switchMap(() => getWeatherState(user)))
    .subscribe(console.log);
});

```
