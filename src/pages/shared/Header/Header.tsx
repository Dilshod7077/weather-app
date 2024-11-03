import React, { useState, useEffect } from "react";
import s from "./Header.module.scss";
import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";
import Select from "react-select";
import { useTheme } from "../../../hooks/useTheme";
import { Theme } from "../../../context/ThemeContext";

interface CityOption {
  name: string;
  label: string;
  latitude: number;
  longitude: number;
}

interface Props {
  onCitySelect: (name: string, latitude: number, longitude: number) => void;
}

export const Header = ({ onCitySelect }: Props) => {
  const theme = useTheme();
  const [options, setOptions] = useState<CityOption[]>([]);
  const [inputValue, setInputValue] = useState("");

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
    option: (styles: any, { isFocused, isSelected }: any) => ({
      ...styles,
      backgroundColor: isSelected
        ? theme.theme === Theme.DARK
          ? "#333"
          : "#b3d4fc"
        : isFocused
        ? theme.theme === Theme.DARK
          ? "#333333e5"
          : "#e0f0ff"
        : theme.theme === Theme.DARK
        ? "#4f4f4f"
        : "#fff",
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
      cursor: "pointer",
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  const fetchCities = async (input: string) => {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=ru&format=json`
    );
    const data = await response.json();
    const cityOptions = data.results.map((city: any) => ({
      name: city.name,
      label: city.name,
      latitude: city.latitude,
      longitude: city.longitude,
    }));

    setOptions(cityOptions);
  };

  const inputChange = (inputValue: string) => {
    setInputValue(inputValue);
    if (inputValue.length > 2) {
      fetchCities(inputValue);
    } else {
      setOptions([]);
    }
  };

  const handleCitySelect = (selectedOption: CityOption | null) => {
    if (selectedOption) {
      onCitySelect(
        selectedOption.name,
        selectedOption.latitude,
        selectedOption.longitude
      );
    }
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          onInputChange={inputChange}
          onChange={handleCitySelect}
          styles={colorStyles}
          options={options}
          isClearable
        />
      </div>
    </header>
  );
};
