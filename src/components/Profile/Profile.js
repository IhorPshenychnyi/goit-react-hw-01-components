import Description from './Description';
import Stats from './Stats';
import user from './user.json';
import s from './Profile.module.css';

export default function Profile() {
  return (
    <div className={s.profile}>
      <Description
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats stats={user.stats} />
    </div>
  );
}
