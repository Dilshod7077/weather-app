export type Weather = {
  latitude: number;
  longitude: number;
  current_units: {
    time: string;
    interval: number;
    temperature_2m: string;
    apparent_temperature: string;
    pressure_msl: string;
    precipitation: string;
    wind_direction_10m : string;
    wind_speed_10m:  string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    apparent_temperature: number;
    pressure_msl: number;
    precipitation: number;
    wind_direction_10m: number;
    wind_speed_10m: number;
    weather_code: number;
    is_day: number;
  };
  hourly: {
    time: string[]; 
    temperature_2m: number[];
    apparent_temperature: number[];
    precipitation: number[];
    pressure_msl: number[];
    weather_code: number[];
    wind_speed_10m: number[];
    is_day: number[];
  }
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    apparent_temperature_max: number[];
    precipitation_probability_max: number[];
    wind_speed_10m_max: number[];
    wind_direction_10m_dominant: number[];
    weather_code: number[];
  };
};
