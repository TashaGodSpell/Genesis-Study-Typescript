import styles from "./Avatar.module.css";

interface avatarProps {
  hasBorder?: boolean;
  img: string;
}

export function Avatar({ hasBorder = true, img }: avatarProps) {
  return (
    <img
      src={img}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    ></img>
  );
}
