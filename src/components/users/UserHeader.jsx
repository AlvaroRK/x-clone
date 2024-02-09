import { BsThreeDots } from "react-icons/bs";

const UserHeader = ({ name, username, img }) => {
  return (
    <div className="user">
      <div className="imgCont">
        <img src={img} alt="img" />
      </div>
      <div className="names">
        <p className="name">{name}</p>
        <p className="username">@{username}</p>
      </div>
      <BsThreeDots />
    </div>
  );
};
export default UserHeader;
