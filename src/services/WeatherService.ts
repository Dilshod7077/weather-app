import { AxiosResponse } from "axios";
import { Weather } from "../store/types/types";
import api from "../axios";

function generateParams(latitude: number, longitude: number) {
  return {
    latitude,
    longitude,
    forecast_days: 16,
    current: "temperature_2m,apparent_temperature,pressure_msl,precipitation,wind_speed_10m,wind_direction_10m,weather_code",
    hourly: "temperature_2m,apparent_temperature,precipitation,weather_code,pressure_msl,wind_speed_10m,is_day",
    daily: "temperature_2m_max,wind_speed_10m_max,precipitation_probability_max,wind_direction_10m_dominant,temperature_2m_min,apparent_temperature_max,weather_code"
  };
}

export class WeatherService {
  static getCurrentWeather(latitude: number, longitude: number): Promise<AxiosResponse<Weather>> {
    const params = generateParams(latitude, longitude);
    return api.get<Weather>('/forecast', { params });
  }
}

