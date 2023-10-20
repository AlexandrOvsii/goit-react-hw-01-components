import css from './FriendList.module.css';
import FriendListItem from '../FreindListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

export default FriendList;
