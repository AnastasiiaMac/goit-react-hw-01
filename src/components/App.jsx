import "./App.css";
import Profile from "./Profile/Profile";
import userData from "../userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "../friends.json";

export default function App() {
  return (
    <div className="container">
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
}
