import React from "react";
import styles from "./ColorHead.module.css";
import ColorCard from "./ColorCard/ColorCard";
import ButtonsMedium from "./../../../components/Helpers/Buttons/ButtonsMedium/ButtonsMedium";
import { FavoriteIcon, DownloadIcon } from "../../../components/icons/Icons";
const ColorHead = ({ color, toScroll }) => {
  const { slug, colors } = color;
  console.log(toScroll);
  return (
    <div className={styles.head}>
      <div className={styles.head__info}>
        <h2>{slug}</h2>
        <div className={styles.buttons}>
          <ButtonsMedium label="Save Color">
            <FavoriteIcon /> Save
          </ButtonsMedium>
          <ButtonsMedium label="Download in svg">
            <DownloadIcon /> Download in svg
          </ButtonsMedium>
        </div>
      </div>
      <div className={styles.color__grid} data-scroll={false}>
        {colors.map((color) => (
          <div className={styles.item} key={color}>
            <ColorCard color={color} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorHead;
