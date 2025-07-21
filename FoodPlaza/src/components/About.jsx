import UserCard from "./UserCard";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <h2>I am About</h2>
      <UserCard name={"Siddhartha"} location={"Meerut"} />
      <UserClass name={"Siddhartha"} location={"Meerut"} />
    </div>
  );
};

export default About;
