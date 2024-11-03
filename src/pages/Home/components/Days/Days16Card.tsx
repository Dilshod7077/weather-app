import s from "./Days.module.scss";
import { Days } from "./Days";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";

interface Props {
  day: Days;
  onClick: () => void;
}

export const DaysCard = ({ day, onClick  }: Props) => {
  return (
    <div className={s.card} onClick={onClick}>
      <div className={s.day}>{day.day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className={s.temp__day}>{day.temp_max}</div>
      <div className={s.temp__night}>{day.temp_min}</div>
      <div className={s.info}>{day.info}</div>
    </div>
  );
};
