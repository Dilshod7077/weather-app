import { useState } from "react";
import s from "./Header.module.scss";
import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";
import Select, { components } from "react-select";
import { useTheme } from "../../../hooks/useTheme";
import { Theme } from "../../../context/ThemeContext";
import { CircleFlag } from "react-circle-flags";

interface CityOption {
  name: string;
  label: string;
  country_code: string;
  latitude: number;
  longitude: number;
}

interface Props {
  onCitySelect: (
    name: string,
    country_code: string,
    latitude: number,
    longitude: number
  ) => void;
}

const CustomOption = (props: any) => {
  const { data } = props;
  return (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span>{data.label}</span>
        <CircleFlag
          countryCode={data.country_code.toLowerCase()}
          width={20}
          height={20}
        />
      </div>
    </components.Option>
  );
};

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
    input: (styles: any) => ({
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
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=ru&format=json`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data && data.results) {
        const cityOptions = data.results.map((city: any) => ({
          name: city.name,
          label: city.name,
          country_code: city.country_code,
          latitude: city.latitude,
          longitude: city.longitude,
        }));
        setOptions(cityOptions);
      } else {
        setOptions([]);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
      setOptions([]);
    }
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
        selectedOption.country_code,
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
          inputValue={inputValue}
          onInputChange={inputChange}
          onChange={handleCitySelect}
          styles={colorStyles}
          options={options}
          isClearable
          placeholder="Введите город"
          components={{ Option: CustomOption }}
        />
      </div>
    </header>
  );
};
