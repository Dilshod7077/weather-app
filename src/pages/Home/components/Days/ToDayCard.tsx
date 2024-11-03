import React from "react";
import s from "./Days.module.scss";
import { Today } from "./Days";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";

interface Props {
  today: Today;
  onClick: () => void; 
}

export const TodayCard = ({ today, onClick }: Props) => {
  return (
    <div className={s.card} onClick={onClick}>
      <div className={s.day}>{today.time}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={today.icon_id} />
      </div>
      <div className={s.temp__day}>{today.temp_max}</div>
      <div className={s.temp__night}>{today.temp_min}</div>
      <div className={s.info}>{today.info}</div>
    </div>
  );
};
