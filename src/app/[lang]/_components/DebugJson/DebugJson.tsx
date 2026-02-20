import React from 'react';

import styles from './styles.module.css';

interface IProps {
  json: unknown;
}

export const DebugJson: React.FC<IProps> = (props) => { 
  const { json } = props;

  return <pre className={styles.root}>{JSON.stringify(json, null, 2)}</pre>;
};
