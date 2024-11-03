import React from "react";
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

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <div
            className={`${s.tab} ${tab.value === selectedTab ? s.active : ""}`}
            key={tab.value}
            onClick={() => onTabClick(tab.value)}
          >
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel} onClick={onCancel}>
        Отменить
      </div>
    </div>
  );
};
