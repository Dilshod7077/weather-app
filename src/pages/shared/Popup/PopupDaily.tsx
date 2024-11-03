import s from "./Popup.module.scss";
import { Item } from "../../Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../Home/components/ThisDayInfo/ThisDayItem";
import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../store/types/types";

interface Props {
  togglePopupDaily: () => void;
  weather: Weather;
  index: number;
  dayName: string;
  date: string;
  city: string;
}


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

export const PopupDaily = ({
  togglePopupDaily,
  weather,
  index,
  dayName,
  date,
  city
}: Props) => {
  const items: Item[] = [
    {
      icon_id: "temp",
      name: "Температура",
      value:
        weather.daily.temperature_2m_max?.[index] !== undefined &&
        weather.daily.apparent_temperature_max?.[index] !== undefined
          ? `${Math.floor(
              weather.daily.temperature_2m_max[index]
            )}° - ощущается как ${Math.floor(
              weather.daily.apparent_temperature_max[index]
            )}°`
          : "Данные недоступны",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value:
        weather.daily.precipitation_probability_max?.[index] !== undefined &&
        weather.daily.precipitation_probability_max[index] > 1
          ? `${weather.daily.precipitation_probability_max[index]} мм`
          : "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value:
        weather.daily.wind_speed_10m_max?.[index] !== undefined
          ? `${Math.floor(
              weather.daily.wind_speed_10m_max[index]
            )} м/с ${getWindDirection(weather.daily.wind_direction_10m_dominant[index])} - ${getWindClass(weather.daily.wind_speed_10m_max[index])}`
          : "Данные недоступны",
    },
  ];

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

  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>
            {Math.floor(weather.daily.temperature_2m_max[index])}°
          </div>
          <div className={s.day__name}>{dayName ? dayName : date}</div>
          <div className={s.img}>
            <GlobalSvgSelector
              id={weatherIcon[weather.daily.weather_code[index]] || "unknown"}
            />
          </div>
          <div className={s.day__city}>
            Город: <span>{city || "Не выбрано"}</span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close} onClick={togglePopupDaily}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
