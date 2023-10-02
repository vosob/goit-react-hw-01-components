import { FriendListCreateMarkup } from 'components/FriendList/FriendListCreateMarkup';
import css from 'components/FriendList/FriendList.module.css';
export const FriendList = ({ events }) => {
  return (
    <ul className={css.FriendListSectin}>
      {events.map(({ avatar, name, isOnline, id }) => (
        <FriendListCreateMarkup
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};
