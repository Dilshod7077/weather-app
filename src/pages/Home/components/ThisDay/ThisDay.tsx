import s from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import { CircleFlag } from "react-circle-flags";

interface Props {
  weather: Weather;
  city: string | null;
  countryCode: string | null;
}

const formatTime = (time: string): string => {
  const date = new Date(time);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export const ThisDay = ({ weather, city, countryCode }: Props) => {
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
    65: "heavy_rain",
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
  const currentWeatherCode = weather.current.weather_code;

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>
            {Math.floor(weather.current.temperature_2m)}°
          </div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id={weatherIcon[currentWeatherCode] || "unknown"} />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>{formatTime(weather.current.time)}</span>
        </div>
        <div className={s.this__city}>
          Город:{" "}
          <span>
            {city || "Не выбрано"} ({countryCode})
          </span>
          {countryCode && (
            <span>
              <CircleFlag
                countryCode={countryCode.toLowerCase()}
                width={25}
                height={25}
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
