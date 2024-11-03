import React from "react";
import s from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import { ThisDayItem } from "./ThisDayItem";
import { Weather } from "../../../../store/types/types";

interface Props {
  weather: Weather;
}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const pressureDescription = (pressure: number): string => {
  if (pressure < 1000) {
    return "пониженное";
  } else if (pressure > 1020) {
    return "повышенное";
  } else {
    return "нормальное";
  }
};

const getWindDirection = (degree: number): string => {
  const directions = [
    "Север", "Северо-восток", "Восток", "Юго-восток",
    "Юг", "Юго-запад", "Запад", "Северо-запад"
  ];
  
  const index = Math.round(degree / 45) % 8;
  return directions[index];
};

const getWindClass = (speed: number): string => {
  if (speed < 5) {
    return "легкий ветер";
  } else if (speed < 10) {
    return "умеренный ветер";
  } else {
    return "сильный ветер";
  }
};


export const ThisDayInfo = ({ weather }: Props) => {

  const items: Item[] = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(
        weather.current.temperature_2m
      )}° - ощущается как ${Math.floor(weather.current.apparent_temperature)}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${
        Math.floor(weather.current.pressure_msl)
      } мм ртутного столба - ${(pressureDescription(weather.current.pressure_msl))}`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: weather.current.precipitation > 1 ? `${weather.current.precipitation} мм` : "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${Math.floor(weather.current.wind_speed_10m)} м/с ${getWindDirection(weather.current.wind_direction_10m)} - ${getWindClass(weather.current.wind_speed_10m)}`,
    },
  ];

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};
