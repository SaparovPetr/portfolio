import { BtnGoToProps } from '@utils-types';

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
    className='btn-outline'
  >
    <img src={icon} alt={alt} />
    <p>{children}</p>
  </a>
);

export default BtnGoTo;
