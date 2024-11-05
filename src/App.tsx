import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./pages/shared/Header/Header";
import { Popup } from "./pages/shared/Popup/Popup";
import { Weather } from "./store/types/types";
import { PopupDaily } from "./pages/shared/Popup/PopupDaily";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupDailyOpen, setIsPopupDailyOpen] = useState(false);
  const [popupDate, setPopupDate] = useState<string | null>(null);
  const [popupWeatherData, setPopupWeatherData] = useState<Weather | null>(
    null
  );
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const defaultCity = "Khujand";
  const defaultCountry = "TJ";
  const defaultCoordinates = { latitude: 40.28256, longitude: 69.62216 };
  const [selectedCity, setSelectedCity] = useState<string>(() => {
    return localStorage.getItem("selectedCity") || defaultCity;
  });
  const [coordinates, setCoordinates] = useState(() => {
    const savedCoordinates = localStorage.getItem("coordinates");
    return savedCoordinates ? JSON.parse(savedCoordinates) : defaultCoordinates;
  });
  const [countryCode, setCountryCode] = useState<string>(() => {
    return localStorage.getItem("countryCode") || defaultCountry;
  });

  const togglePopup = (weatherData?: Weather, index?: number) => {
    setIsPopupOpen(!isPopupOpen);
    if (weatherData) {
      setPopupWeatherData(weatherData);
    }
    if (typeof index === "number") {
      setPopupIndex(index);
    }
  };

  const togglePopupDaily = (
    weatherData?: Weather,
    index?: number,
    date?: string
  ) => {
    setIsPopupDailyOpen(!isPopupDailyOpen);
    if (weatherData) {
      setPopupWeatherData(weatherData);
    }
    if (typeof index === "number") {
      setPopupIndex(index);
    }
    if (date) {
      setPopupDate(date);
    }
  };

  const onCitySelect = (
    name: string,
    country_code: string,
    latitude: number,
    longitude: number
  ) => {
    setCoordinates({ latitude, longitude });
    setSelectedCity(name);
    setCountryCode(country_code);
    localStorage.setItem("selectedCity", name);
    localStorage.setItem("countryCode", country_code);
    localStorage.setItem(
      "coordinates",
      JSON.stringify({ latitude, longitude })
    );
  };

  return (
    <div className="global-container">
      {isPopupOpen && popupWeatherData && popupIndex !== null && (
        <Popup
          togglePopup={togglePopup}
          weather={popupWeatherData}
          index={popupIndex}
          city={selectedCity}
        />
      )}
      {isPopupDailyOpen && popupWeatherData && popupIndex !== null && (
        <PopupDaily
          date={popupDate || ""}
          dayName={popupDate ? popupDate : ""}
          togglePopupDaily={togglePopupDaily}
          weather={popupWeatherData}
          index={popupIndex}
          city={selectedCity}
        />
      )}
      <div className="container">
        <Header onCitySelect={onCitySelect} />
        <Routes>
          <Route
            path="/weather-app"
            element={
              <Home
                togglePopup={togglePopup}
                togglePopupDaily={togglePopupDaily}
                coordinates={coordinates}
                selectedCity={selectedCity}
                countryCode={countryCode}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
