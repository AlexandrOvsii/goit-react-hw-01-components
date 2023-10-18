function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatarProfile" />
        <p className="name"><b>{username}</b></p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats-list">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="stats-list">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="stats-list">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
