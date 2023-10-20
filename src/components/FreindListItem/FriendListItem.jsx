import css from './FriendListItem.module.css';

function FriendListItem({ friends }) {
  return friends.map(({ id, avatar, name, isOnline }) => {
    return (
      <li key={id} className={css.friendListItem}>
        <span className={isOnline ? css.isOnline : css.isOffline}>
          {isOnline}
        </span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
}

export default FriendListItem;
