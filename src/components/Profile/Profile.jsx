import css from "./Profile.module.css";
console.log(css);

const Profile = ({
  username,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div>
        <img src={image} alt="User avatar" width={100} className={css.image} />
        <p className={css.username}>{username}</p>
        <p className={css.text}>{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css["list-item"]}>
          <span>Followers</span>
          <span className={css.span}>{followers}</span>
        </li>
        <li className={css["list-item"]}>
          <span>Views</span>
          <span className={css.span}>{views}</span>
        </li>
        <li className={css["list-item"]}>
          <span>Likes</span>
          <span className={css.span}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
