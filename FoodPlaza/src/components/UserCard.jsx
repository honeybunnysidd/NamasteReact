const UserCard = ({ name, location }) => {
  return (
    <>
      <div className="userCard">
        <h3>Name: {name}</h3>
        <p>Location: {location} </p>
        <p>Contact: sidd@gmail.com</p>
      </div>
    </>
  );
};

export default UserCard;
