import React, { useState, useEffect } from "react";
import s from "./Days.module.scss";

interface Props {
  selectedTab: string;
  onTabClick: (tab: string) => void;
  onCancel: () => void;
}

export const Tabs = ({ selectedTab, onTabClick, onCancel }: Props) => {
  const tabs = [
    { value: "На сегодня" },
    { value: "На неделю" },
    { value: "На 16 дней" },
  ];

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {isMobile ? (
          <select
            className={s.select}
            value={selectedTab}
            onChange={(e) => onTabClick(e.target.value)}
          >
            {tabs.map((tab) => (
              <option key={tab.value} value={tab.value}>
                {tab.value}
              </option>
            ))}
          </select>
        ) : (
          tabs.map((tab) => (
            <div
              className={`${s.tab} ${tab.value === selectedTab ? s.active : ""}`}
              key={tab.value}
              onClick={() => onTabClick(tab.value)}
            >
              {tab.value}
            </div>
          ))
        )}
      </div>
      <div className={s.cancel} onClick={onCancel}>
        Отменить
      </div>
    </div>
  );
};
