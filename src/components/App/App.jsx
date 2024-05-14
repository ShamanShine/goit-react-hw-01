import './App.css'
import { Profile } from '../Profile/Profile';
import userData from '../../userData.json';
import { FriendList } from '../FriendList/FriendList'; 
import friends from '../../friends.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from "../../transactions.json";

console.log(transactions);

export default function App() {
  return (
    <>
      <h1>GoIT-react-hw-01</h1>
     
      <Profile name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
            
    </>
  );
}

