import styles from './Avatar.module.scss';

type AvatarProps = {
  title: string;
};
const Avatar = ({title}: AvatarProps) => {
  return <span className={styles.avatar}>{title}</span>;
};

export default Avatar;
