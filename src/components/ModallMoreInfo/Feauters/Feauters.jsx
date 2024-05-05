import { useSelector } from "react-redux";
import css from "./Feauters.module.css";
import { nanoid } from "@reduxjs/toolkit";

import { icons } from "../../../assets/Icons/Icons";

const Feauters = () => {
  const { camperMoreInfo } = useSelector((state) => state.campers);
  const featuresIcons = [
    {
      label: "adults",
      icon: <icons.AdultSvg size={20} />,
      value: camperMoreInfo.adults,
    },
    {
      label: camperMoreInfo.transmission,
      icon: <icons.AutomaticSvg size={20} />,
      value: null,
    },
    { label: "AC", icon: <icons.AcAirSvg size={20} />, value: null },
    {
      label: camperMoreInfo.engine,
      icon: <icons.PetrolSvg size={20} />,
      value: null,
    },
    {
      label: "kitchen",
      icon: <icons.KitchenSvg size={20} />,
      value: null,
    },
    {
      label: "beds",
      icon: <icons.BedsSvg size={20} />,
      value: camperMoreInfo.details.beds,
    },
    {
      label: "air conditioner",
      icon: <icons.ConditionerSvg size={20} />,
      value: camperMoreInfo.details.airConditioner,
    },
    {
      label: "CD",
      icon: <icons.CdSvg size={20} />,
      value: null,
    },
    {
      label: "Radio",
      icon: <icons.RadioSvg size={20} />,
      value: null,
    },
    {
      label: "hob",
      icon: <icons.HobSvg size={20} />,
      value: camperMoreInfo.details.hob,
    },
  ];
  const features = [
    { label: "Form", value: camperMoreInfo.form },
    { label: "Length", value: camperMoreInfo.length },
    { label: "Width", value: camperMoreInfo.width },
    { label: "Height", value: camperMoreInfo.height },
    { label: "Tank", value: camperMoreInfo.tank },
    { label: "Consumption", value: camperMoreInfo.consumption },
  ];
  return (
    <div className={css.feautersContainer}>
      <ul className={css.feautersIcons}>
        {featuresIcons.map((item) => (
          <li key={nanoid()} className={css.itemsIcons}>
            {item.icon}
            <span>
              {item.value} {item.label}
            </span>
          </li>
        ))}
      </ul>

      <h2 className={css.header}>Vehicle details</h2>
      <ul className={css.featuresList}>
        {features.map((feature, index) => (
          <li key={nanoid()} className={css.itemFeatures}>
            <span>{feature.label}</span>
            <span>{feature.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feauters;
