import { ProfileCreateMarkup } from 'components/Profile/ProfileCreateMarkup';

export const Profile = ({ events }) => {
  const { username, tag, location, avatar, stats } = events;
  return (
    <div>
      <ProfileCreateMarkup
        key={username}
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};
