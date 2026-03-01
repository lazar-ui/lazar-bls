import React from "react";

import { getVariantClassName } from "Utils/getVariantClassName";
import clsx from "clsx";

import { ELanguage } from "../enums";
import styles from "./styles.module.scss";

interface IProps {
  language: ELanguage;
}

export const Icon: React.FC<IProps> = (props) => {
  const { language } = props;

  const rootClassName = clsx(
    styles.root,
    getVariantClassName("language", language, styles),
  );

  return <i className={rootClassName} />;
};
