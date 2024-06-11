import "./App.css";
import Profile from "./Profile/Profile";
import userData from "../userData.json";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
    </>
  );
}
