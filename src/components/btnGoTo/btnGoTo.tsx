import { BtnGoToProps } from '@utils-types';

import styles from './style.module.css';

const BtnGoTo: React.FC<BtnGoToProps> = ({
  linkToResourse,
  icon,
  alt,
  children
}) => (
  <a
    href={linkToResourse}
    target='_blank'
    rel='noreferrer'
    className={styles.btn_outline}
  >
    <img src={icon} alt={alt} />
    <p>{children}</p>
  </a>
);

export default BtnGoTo;
