import React, { useCallback, useState } from "react";

import { useOutsideClick } from "Hooks/useOutsideClick";
import clsx from "clsx";

import { Label } from "./Label";
import { List } from "./List";

import { ELanguage } from "./enums";
import styles from "./styles.module.scss";

export interface IProps {
  /** Selected language. */
  language?: ELanguage;

  /** Handle language select. */
  onSelect: (language: ELanguage) => void;

  /** Display icon with language in the select. */
  showIcon?: boolean;
}

export const LanguageSelect: React.FC<IProps> = (props) => {
  const { language = ELanguage.EN, onSelect, showIcon = true } = props;
  const [opened, setOpened] = useState(false);

  const rootClassName = clsx(styles.root, { [styles.opened]: opened });

  const handelLabelClick = useCallback(() => setOpened((prev) => !prev), []);
  const handleOutsideClick = useCallback(() => setOpened(false), []);

  const ref = useOutsideClick(handleOutsideClick);

  const handleSelect = useCallback(
    (language: ELanguage) => {
      setOpened(false);
      onSelect(language);
    },
    [onSelect],
  );

  return (
    <div className={rootClassName} ref={ref}>
      <Label
        language={language}
        onClick={handelLabelClick}
        opened={opened}
        showIcon={showIcon}
      />
      <div className={styles.popup}>
        <List languges={language} onSelect={handleSelect} />
      </div>
    </div>
  );
};
