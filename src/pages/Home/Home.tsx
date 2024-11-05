import React, { useEffect } from "react";
import s from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { selectCurrentWeatherData } from "../../store/selectors";

interface Props {
  togglePopup: () => void;
  togglePopupDaily: () => void;
  coordinates: { latitude: number; longitude: number };
  selectedCity: string | null;
  countryCode: string | null;
}

export const Home = ({
  togglePopup,
  togglePopupDaily,
  coordinates,
  selectedCity,
  countryCode,
}: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather(coordinates.latitude, coordinates.longitude));
  }, [dispatch, coordinates]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay
          weather={weather}
          city={selectedCity}
          countryCode={countryCode}
        />
        <ThisDayInfo weather={weather} />
      </div>
      <Days
        weather={weather}
        togglePopup={togglePopup}
        togglePopupDaily={togglePopupDaily}
      />
    </div>
  );
};
