import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
}

export default FriendList;
