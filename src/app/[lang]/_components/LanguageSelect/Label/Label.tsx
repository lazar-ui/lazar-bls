import React from 'react';

import clsx from 'clsx';

import { Icon } from '../Icon';

import { ELanguage } from '../enums';
import styles from './styles.module.scss';

interface IProps {
  language: ELanguage;
  onClick: () => void;
  opened: boolean;
  showIcon: boolean;
}

export const Label: React.FC<IProps> = (props) => {
  const { language, onClick, opened, showIcon } = props;

  const rootClassName = clsx(styles.root, { [styles.opened]: opened });

  return (
    <div className={rootClassName} onClick={onClick}>
      {showIcon && <Icon language={language} />}
      <div className={styles.value}>{language}</div>
      <div className={styles.chevron} />
    </div>
  );
};
