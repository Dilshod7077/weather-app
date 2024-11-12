import s from "./Popup.module.scss";
import { Item } from "../../Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../Home/components/ThisDayInfo/ThisDayItem";
import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../store/types/types";
import { useEffect, useRef } from "react";

interface Props {
  togglePopup: () => void;
  weather: Weather;
  index: number;
  city: string | null;
}

export const Popup = ({ togglePopup, weather, index, city }: Props) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        togglePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [togglePopup]);

  const items: Item[] = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(
        weather.hourly.temperature_2m[index]
      )}° - ощущается как ${Math.floor(
        weather.hourly.apparent_temperature[index]
      )}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${Math.floor(
        weather.hourly.pressure_msl[index]
      )} мм ртутного столба - нормальное`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value:
        weather.hourly.precipitation[index] > 1
          ? `${weather.hourly.precipitation[index]} мм`
          : "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${Math.floor(
        weather.hourly.wind_speed_10m[index]
      )} м/с юго-запад - легкий ветер`,
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
      <div className={s.popup} ref={popupRef}>
        <div className={s.day}>
          <div className={s.day__wrapper}>
            <div className={s.day__block}>
              <div className={s.day__temp}>
                {Math.floor(weather.hourly.temperature_2m[index])}°
              </div>
              <div className={s.day__name}>Сегодня</div>
            </div>
            <GlobalSvgSelector
              id={weatherIcon[weather.hourly.weather_code[index]] || "unknown"}
            />
          </div>
          <div className={s.day__time}>
            Время:{" "}
            <span>
              {new Date(weather.hourly.time[index]).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <div className={s.day__city}>
            Город: <span>{city || "Не выбрано"}</span>
          </div>
        </div>
        <hr />
        <div className={s.this__day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close} onClick={togglePopup}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
