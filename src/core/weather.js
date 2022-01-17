const PUBLIC_API_WEATHER_KEY = '788f337a038a558cb64dfab07cb1103c';

const inWeatherDateTime = (weatherDateTime, dateTime) => new Date(weatherDateTime).getTime() >= dateTime.getTime();

const fetchWeather = async (city, dateTime) => {
  const api_key = process.env.REACT_APP_API_WEATHER_KEY || PUBLIC_API_WEATHER_KEY;
  if (!api_key) {
    return Promise.reject('Missing API_WEATHER_KEY');
  }
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=16&APPID=${api_key}`);
  const data = await response.json();
  const item = data.list.find((item) => inWeatherDateTime(item.dt_txt, dateTime));
  const info = item ? item.weather[0] : {};
  return {
    icon: info.icon,
    description: info.description,
  };
};

const formatIconUrl = (icon) => `https://openweathermap.org/img/w/${icon}.png`;

export { fetchWeather, formatIconUrl };
