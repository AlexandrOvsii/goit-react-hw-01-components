import user from '../user.json';
import data from '../data.json';
import Statistics from './Statistics';
import Profile from './Profile';
import friends from '../friends.json';
import FriendList from './FriendList';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
    </>
  );
}

export default App;
