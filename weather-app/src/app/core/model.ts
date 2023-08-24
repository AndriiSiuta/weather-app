export interface IResponseInfo {
  page: number;
  results: number;
  seed: string;
  version: string;
}

export interface IUser {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: any;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface Registered {
  date: string;
  age: number;
}

export interface Id {
  name: string;
  value: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUserResponse {
  results: IUser[];
  info: IResponseInfo;
}

export interface IWeather {}

export interface ICoreConfig {
  userApiUrl: string;
  weatherApiUrl: string;
}

export const CORE_CONFIG: ICoreConfig = {
  userApiUrl: 'https://randomuser.me/api/',
  weatherApiUrl: 'https://api.open-meteo.com/v1/forecast',
};

export interface WeatherParams {
  latitude: number;
  longitude: number;
}

export interface IWeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: ICurrentWeather;
  hourly_units: IHourlyUnits;
  hourly: IHourly;
}

export interface ICurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
}

export interface IHourlyUnits {
  time: string;
  temperature_2m: string;
}

export interface IHourly {
  time: string[];
  temperature_2m: number[];
}

export interface IWeatherState {
  user: IUser;
  weather: IWeatherResponse;
  saved: boolean;
}

export enum WeatherCode {
  clearSky = 0,
  mainlyClear = 1,
  partlyCloudy = 2,
  overcast = 3,
  fog = 45,
  depositingTimeFog = 48,
  lightDrizzle = 51,
  moderateDrizzle = 53,
  denseDrizzle = 55,
  lightFreezingDrizzle = 56,
  moderateOrDenseFreezingDrizzle = 57,
  lightRain = 61,
  moderateRain = 63,
  heavyRain = 65,
  lightFreezingRain = 66,
  moderateOrHeavyFreezingRain = 67,
  slightSnowfall = 71,
  moderateSnowfall = 73,
  heavySnowfall = 75,
  snowGrains = 77,
  slightRainShowers = 80,
  moderateRainShowers = 81,
  heavyRainShowers = 82,
  slightSnowShowers = 85,
  heavySnowShowers = 86,
  thunderstormSlightOrModerate = 95,
  thunderstormStrong = 96,
  thunderstormHeavy = 99,
}

export enum WeatherIcon {
  sun = 'sun',
  cloudSun = 'cloud-sun',
  cloud = 'cloud',
  cloudFog = 'cloud',
  cloudDrizzle = 'cloud-showers-heavy',
  cloudRain = 'cloud-rain',
  cloudSnow = 'snowflake',
  cloudShowers = 'cloud-showers-heavy',
  bolt = 'bolt',
}

export const WeatherCodeToIconMap = new Map<WeatherCode, WeatherIcon>()
  .set(WeatherCode.clearSky, WeatherIcon.sun)
  .set(WeatherCode.mainlyClear, WeatherIcon.sun)
  .set(WeatherCode.partlyCloudy, WeatherIcon.cloudSun)
  .set(WeatherCode.overcast, WeatherIcon.cloud)
  .set(WeatherCode.fog, WeatherIcon.cloudFog)
  .set(WeatherCode.depositingTimeFog, WeatherIcon.cloudFog)
  .set(WeatherCode.lightDrizzle, WeatherIcon.cloudDrizzle)
  .set(WeatherCode.moderateDrizzle, WeatherIcon.cloudDrizzle)
  .set(WeatherCode.denseDrizzle, WeatherIcon.cloudDrizzle)
  .set(WeatherCode.lightFreezingDrizzle, WeatherIcon.cloudDrizzle)
  .set(WeatherCode.moderateOrDenseFreezingDrizzle, WeatherIcon.cloudDrizzle)
  .set(WeatherCode.lightRain, WeatherIcon.cloudRain)
  .set(WeatherCode.moderateRain, WeatherIcon.cloudRain)
  .set(WeatherCode.heavyRain, WeatherIcon.cloudRain)
  .set(WeatherCode.lightFreezingRain, WeatherIcon.cloudRain)
  .set(WeatherCode.moderateOrHeavyFreezingRain, WeatherIcon.cloudRain)
  .set(WeatherCode.slightSnowfall, WeatherIcon.cloudSnow)
  .set(WeatherCode.moderateSnowfall, WeatherIcon.cloudSnow)
  .set(WeatherCode.heavySnowfall, WeatherIcon.cloudSnow)
  .set(WeatherCode.snowGrains, WeatherIcon.cloudSnow)
  .set(WeatherCode.slightRainShowers, WeatherIcon.cloudShowers)
  .set(WeatherCode.moderateRainShowers, WeatherIcon.cloudShowers)
  .set(WeatherCode.heavyRainShowers, WeatherIcon.cloudShowers)
  .set(WeatherCode.slightSnowShowers, WeatherIcon.cloudShowers)
  .set(WeatherCode.heavySnowShowers, WeatherIcon.cloudShowers)
  .set(WeatherCode.thunderstormSlightOrModerate, WeatherIcon.bolt)
  .set(WeatherCode.thunderstormStrong, WeatherIcon.bolt)
  .set(WeatherCode.thunderstormHeavy, WeatherIcon.bolt);

export const LS_KEY = 'state';
