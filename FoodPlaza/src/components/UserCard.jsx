import { useState } from "react";

const UserCard = ({ name, location }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="userCard">
        <h2>Count = {count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count++
        </button>
        <h3>Name: {name}</h3>
        <p>Location: {location} </p>
        <p>Contact: sidd@gmail.com</p>
      </div>
    </>
  );
};

export default UserCard;
