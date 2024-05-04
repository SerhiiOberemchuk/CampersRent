import { useSelector } from "react-redux";
import css from "./Feauters.module.css";
import AdultsSvg from "../../../assets/Icons/AdultsSvg";
import Automatic from "../../../assets/Icons/AutomaticSvg";
import AcAirSvg from "../../../assets/Icons/AcAirSvg";
import { nanoid } from "@reduxjs/toolkit";
import PetrolSvg from "../../../assets/Icons/PetrolSvg";
import Kitchen from "../../../assets/Icons/KitchenSvg";
import BedsSvg from "../../../assets/Icons/BedsSvg";
import ConditionerSvg from "../../../assets/Icons/ConditionerSvg";
import CdSvg from "../../../assets/Icons/CdSvg";
import RadioSvg from "../../../assets/Icons/RadioSvg";
import HobSvg from "../../../assets/Icons/HobSvg";

const Feauters = () => {
  const { camperMoreInfo } = useSelector((state) => state.campers);
  const featuresIcons = [
    {
      label: "adults",
      icon: <AdultsSvg size={20} />,
      value: camperMoreInfo.adults,
    },
    {
      label: camperMoreInfo.transmission,
      icon: <Automatic size={20} />,
      value: null,
    },
    { label: "AC", icon: <AcAirSvg size={20} />, value: null },
    {
      label: camperMoreInfo.engine,
      icon: <PetrolSvg size={20} />,
      value: null,
    },
    {
      label: "kitchen",
      icon: <Kitchen size={20} />,
      value: null,
    },
    {
      label: "beds",
      icon: <BedsSvg size={20} />,
      value: camperMoreInfo.details.beds,
    },
    {
      label: "air conditioner",
      icon: <ConditionerSvg size={20} />,
      value: camperMoreInfo.details.airConditioner,
    },
    {
      label: "CD",
      icon: <CdSvg size={20} />,
      value: null,
    },
    {
      label: "Radio",
      icon: <RadioSvg size={20} />,
      value: null,
    },
    {
      label: "hob",
      icon: <HobSvg size={20} />,
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
