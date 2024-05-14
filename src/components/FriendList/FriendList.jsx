import { FriendListItem } from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem {...friend}/>
        </li>
      ))}
    </ul>
  );
};