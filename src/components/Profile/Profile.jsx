import styles from './Profile.module.css';
export const Profile = ({ name, tag, location, image, stats }) => {
    return (
    <>
  <div className={styles.container}>
        <img className={styles.foto} src={image} alt="User avatar"/>
        <p className={styles.name}> {name}</p>
        <p> @{tag}</p>
        <p> {location}</p>
  </div>

  <ul className={styles.fild}>
    <li className={styles.followers}>
        <span>Followers</span>
        <span className={styles.boldText}> {stats.followers}</span>
    </li>
    <li className={styles.views}>
        <span>Views</span>
        <span className={styles.boldText}> {stats.views}</span>
    </li>
    <li>
        <span>Likes</span>
        <span className={styles.boldText}> { stats.likes}</span>
    </li>
  </ul>
</>
  );
};

