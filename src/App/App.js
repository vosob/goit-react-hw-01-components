import { Profile } from 'components/Profile/Profile';
import userEvents from 'components/Profile/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import userStats from 'components/Statistics/data.json';
import userFriends from 'components/FriendList/friends.json';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import userTransactions from 'components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile events={userEvents} />
      <Statistics title="Upload stats" events={userStats} />
      <FriendList events={userFriends} />
      <TransactionHistory events={userTransactions} />
    </>
  );
};
