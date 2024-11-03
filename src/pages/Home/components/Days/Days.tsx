import React, { useState } from "react";
import { Card } from "./Card";
import s from "./Days.module.scss";
import { Tabs } from "./Tabs";
import { Weather } from "../../../../store/types/types";
import { TodayCard } from "./ToDayCard";
import { DaysCard } from "./Days16Card";

interface Props {
  weather: Weather;
  togglePopup: (weather: Weather, index: number) => void;
  togglePopupDaily: (weather: Weather, index: number, dayName: string) => void;
}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_max: string;
  temp_min: string;
  info: string;
}
export interface Today {
  time: string;
  icon_id: string;
  temp_max: string;
  temp_min: string;
  info: string;
}
export interface Days {
  day_info: string;
  icon_id: string;
  temp_max: string;
  temp_min: string;
  info: string;
}

export const Days = ({ weather, togglePopup, togglePopupDaily }: Props) => {
  const defaultTab = "На сегодня";
  const [selectedTab, setSelectedTab] = useState<string>(defaultTab);

  const resetSelectedTab = () => {
    setSelectedTab(defaultTab);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
  };

  const formatTime = (timeString: string): string => {
    const time = new Date(timeString);
    return time.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const weatherDescription: { [key: number]: string } = {
    0: "Ясное небо",
    1: "Преимущественно ясно",
    2: "Переменная облачность",
    3: "Пасмурно",
    45: "Туман и оседающий изморозь",
    48: "Туман и оседающий изморозь",
    51: "Слабая морось",
    53: "Умеренная морось",
    55: "Интенсивная морось",
    56: "Слабая замерзающая морось",
    57: "Интенсивная замерзающая морось",
    61: "Слабый дождь",
    63: "Умеренный дождь",
    65: "Сильный дождь",
    66: "Слабый замерзающий дождь",
    67: "Сильный замерзающий дождь",
    71: "Слабый снегопад",
    73: "Умеренный снегопад",
    75: "Сильный снегопад",
    77: "Снежные зерна",
    80: "Слабые ливни",
    81: "Умеренные ливни",
    82: "Сильные ливни",
    85: "Слабые снежные ливни",
    86: "Сильные снежные ливни",
    95: "Гроза",
    96: "Гроза с небольшим градом",
    99: "Гроза с сильным градом",
  };

  const weatherIcon: { [key: number]: string } = {
    0: "sun",
    1: "clear_sky",
    2: "mainly_cloudy",
    3: "overcast",
    45: "fog",
    48: "fog",
    51: "drizzle",
    53: "drizzle",
    55: "drizzle",
    56: "freezing_drizzle",
    57: "freezing_drizzle",
    61: "small_rain",
    63: "Rain",
    65: "heav_rain",
    66: "freezing_rain",
    67: "freezing_rain",
    71: "light_snow",
    73: "light_snow",
    75: "heavy_snow",
    77: "snow_grains",
    80: "showers",
    81: "showers",
    82: "heavy_showers",
    85: "light_snow_showers",
    86: "heavy_snow_showers",
    95: "thunderstorm",
    96: "thunderstorm_light",
    99: "thunderstorm_heavy",
  };

  const today: Today[] = weather.hourly.time
    .slice(0, 24)
    .map((time, index) => ({
      time: formatTime(time),
      icon_id: weatherIcon[weather.hourly.weather_code[index]] || "unknown",
      temp_max: `${Math.floor(weather.hourly.temperature_2m[index])}°`,
      temp_min: `${Math.floor(weather.hourly.apparent_temperature[index])}°`,
      info:
        weatherDescription[weather.hourly.weather_code[index]] ||
        "Неизвестная погода",
    }));

  const createDay = (index: number, dayName: string): Day => ({
    day: dayName,
    day_info: formatDate(weather.daily.time[index]),
    icon_id: weatherIcon[weather.daily.weather_code[index]] || "unknown",
    temp_max: `${Math.floor(weather.daily.temperature_2m_max[index])}°`,
    temp_min: `${Math.floor(weather.daily.apparent_temperature_max[index])}°`,
    info:
      weatherDescription[weather.daily.weather_code[index]] ||
      "Неизвестная погода",
  });

  const week: Day[] = ["Сегодня", "Завтра", "Ср", "Чт", "Пт", "Сб", "Вс"].map(
    (dayName, index) => createDay(index, dayName)
  );

  const sixteenDays: Days[] = weather.daily.time
    .slice(0, 16)
    .map((time, index) => ({
      day_info: formatDate(weather.daily.time[index]),
      icon_id: weatherIcon[weather.daily.weather_code[index]] || "unknown",
      temp_max: `${Math.floor(weather.daily.temperature_2m_max[index])}°`,
      temp_min: `${Math.floor(weather.daily.apparent_temperature_max[index])}°`,
      info:
        weatherDescription[weather.daily.weather_code[index]] ||
        "Неизвестная погода",
    }));

  const days =
    selectedTab === "На сегодня"
      ? today
      : selectedTab === "На неделю"
      ? week
      : sixteenDays;

  return (
    <>
      <Tabs
        selectedTab={selectedTab}
        onTabClick={setSelectedTab}
        onCancel={resetSelectedTab}
      />
      <div className={s.days}>
        {selectedTab === "На сегодня"
          ? today.map((hourData, index) => (
              <TodayCard
                today={hourData}
                key={index}
                onClick={() => togglePopup(weather, index)}
              />
            ))
          : selectedTab === "На неделю"
          ? week.map((day, index) => (
              <Card
                day={day}
                key={day.day}
                onClick={() => togglePopupDaily(weather, index, day.day)}
              />
            ))
          : sixteenDays.map((day, index) => (
              <DaysCard
                day={day}
                key={day.day_info}
                onClick={() => togglePopupDaily(weather, index, day.day_info)}
              />
            ))}
      </div>
    </>
  );
};
