import {Profiles} from 'profile/profile';
import user from '../datajson/user.json'
import data from '../datajson/data.json'
import friends from '../datajson/friends.json';
import transactions from '../datajson/transactions.json'
import { Statistics } from 'statistics/statistics';
import { FriendList } from 'friends/friends';
import { TransactionHistory } from 'transaction/transaction';
export const App = () => {
  return (
<>
<Profiles
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions}/>
</>
    
  );
};