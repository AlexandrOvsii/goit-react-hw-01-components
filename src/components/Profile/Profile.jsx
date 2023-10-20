import css from './Profile.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>
          <FaMapMarkerAlt />
          {location}
        </p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsList}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={css.statsList}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={css.statsList}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
