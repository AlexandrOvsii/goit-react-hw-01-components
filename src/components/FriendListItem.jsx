function FriendListItem({ friends }) {
  return friends.map(({ id, avatar, name, isOnline }) => {
    return (
      <li key={id} className="friend-list-item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    );
  });
}

export default FriendListItem;
