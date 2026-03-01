import React from "react";

import clsx from "clsx";
import { Check } from "lucide-react";

import { Icon as LanguageIcon } from "../Icon";

import { ELanguage } from "../enums";
import { getLanguageLabel } from "../utils/getLanguageLabel";
import styles from "./styles.module.scss";

interface IProps {
  languges: ELanguage;
  onSelect: (language: ELanguage) => void;
}

export const List: React.FC<IProps> = (props) => {
  const { languges, onSelect } = props;
  const options = Object.values(ELanguage);

  const renderOption = (value: ELanguage) => {
    const selected = value === languges;

    const optionClassName = clsx(styles.option, {
      [styles.selected]: selected,
    });

    return (
      <div className={styles.row} key={value}>
        <div className={optionClassName} onClick={() => onSelect(value)}>
          <LanguageIcon language={value} />
          {getLanguageLabel(value)}
          <div className={styles.check}>
            <Check />
          </div>
        </div>
      </div>
    );
  };

  return <div className={styles.root}>{options.map(renderOption)}</div>;
};
