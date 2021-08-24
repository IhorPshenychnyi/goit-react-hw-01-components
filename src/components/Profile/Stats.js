import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Stats({ stats }) {
  return (
    <ul className={s.stats}>
      <li className={s.statsItem}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.statsItem}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.statsItem}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
}

Stats.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
