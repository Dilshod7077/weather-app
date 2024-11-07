import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather } from "../types/types";
import { AxiosResponse } from "axios";

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState: CurrentWeather = {
  weather: {
    latitude: 0,
    longitude: 0,
    current_units: {
      time: "",
      interval: 0,
      temperature_2m: "",
      apparent_temperature: "",
      pressure_msl: "",
      precipitation: "",
      wind_speed_10m: "",
      wind_direction_10m: "",
    },
    current: {
      time: "",
      interval: 0,
      temperature_2m: 0,
      apparent_temperature: 0,
      pressure_msl: 0,
      precipitation: 0,
      wind_speed_10m: 0,
      wind_direction_10m: 0,
      weather_code: 0,
      is_day: 0,
    },
    hourly: {
      time: [],
      temperature_2m: [],
      apparent_temperature: [],
      precipitation: [],
      weather_code: [],
      pressure_msl: [],
      wind_speed_10m: [],
      is_day: []
    },
    daily: {
      time: [],
      temperature_2m_max: [],
      temperature_2m_min: [],
      apparent_temperature_max: [],
      precipitation_probability_max: [],
      wind_speed_10m_max: [],
      wind_direction_10m_dominant: [],
      weather_code: [],
    },
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

export const currentWeatherSlice = createSlice({
  name: "current_weather",
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.weather = action.payload.data;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default currentWeatherSlice.reducer;
