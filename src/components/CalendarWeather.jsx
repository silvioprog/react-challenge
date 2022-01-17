import { useEffect, useState } from 'react';

import { fetchWeather, formatIconUrl, is16CurrentDays } from '../core';

const CalendarWeather = (props) => {
  const width = props.width || 30;
  const height = props.height || 30;
  const [icon, setIcon] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchWeatherInfo = async () => {
      const info = await fetchWeather(props.city, props.dateTime);
      setIcon(info.icon);
      setDescription(info.description);
    };
    if (is16CurrentDays(props.dateTime)) {
      fetchWeatherInfo();
    }
  }, [props.city, props.dateTime]);

  if (!icon) return null;

  return <img className={props.className} src={formatIconUrl(icon)} alt={description} width={width} height={height} />;
};

export default CalendarWeather;
