import styles from './FriendListItem.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? styles.online : styles.offline;
  return (
    <div className={styles.container}>
      <img className={styles.pic} src={avatar} alt="Avatar" width="48" />
      <p className={styles.nic}>{name}</p>
      <p className={statusClass}>{isOnline ? 'onLine' : 'offLine'} </p>
    </div>
  );
};